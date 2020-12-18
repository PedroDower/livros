import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Livro from '../../components/Livro';
import { Container, Header, ContainerRow, TextoHeader, NomeUsuario, BotaoIcone, ListagemLivro } from './styles';

const ListaLivros = () => {
	const [listaDosLivros, setListaDosLivros] = useState([1, 2, 3, 4, 5, 6]);

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
				renderItem={item => <Livro />}
				keyExtractor={item => 'item' + item}
			/>
		</Container>
	);
};

export default ListaLivros;