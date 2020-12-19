import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Livro from '../../components/Livro';
import { buscaLivros } from '../../services/Livro';
import { Container, Header, ContainerRow, TextoHeader, NomeUsuario, BotaoIcone, ListagemLivro } from './styles';

export interface ListaLivrosDTO {
	id: number;
	nome: string;
	autor: string;
	imagem: string;
}

const ListaLivros = () => {
	const [listaDosLivros, setListaDosLivros] = useState<ListaLivrosDTO[]>([]);

	useEffect(() => {
		const carregaLivros = async () => {
			const resposta = await buscaLivros();
			const json = await resposta.json();
			setListaDosLivros(json);
		}

		carregaLivros();
	}, []);

	return(
		<Container>
			<Header>
				<ContainerRow style={{flexDirection: 'row'}}>
					<TextoHeader style={{fontSize: 24}}>Olá, </TextoHeader>
					<NomeUsuario style={{fontSize: 24, fontWeight: 'bold'}}>Pedro</NomeUsuario>
				</ContainerRow>
				<ContainerRow style={{flexDirection: 'row'}}>
					<BotaoIcone style={{
						marginRight: 10
					}}>
						<Icon name='heart' size={30} color="#000"/>
					</BotaoIcone>
					<BotaoIcone>
						<Icon name='search' size={30} color="#000"/>
					</BotaoIcone>
				</ContainerRow>
			</Header>
				
			<ListagemLivro
				numColumns={2}
				data={listaDosLivros}
				renderItem={
					({ item }: { item: ListaLivrosDTO }) =>
						<Livro data={item} />
					}
				keyExtractor={(_, index) => {
					return 'item' + index;
				}}
			/>
		</Container>
	);
};

export default ListaLivros;