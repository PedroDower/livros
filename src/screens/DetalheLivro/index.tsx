import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Image, StatusBar, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { buscaDetalheLivro } from '../../services/Livro';
import { CapaLivro, Titulo, Autor, DescricaoLivro, BotaoAdicionarFavoritos } from './styles';

interface DetalheLivroTDO {
    id: number;
    nome: string;
    autor: string;
    imagem: string;
    descricao: string;
}

const DetalheLivro = () => {
    const navigation = useNavigation();
    const route = useRoute();
    
    const [
        detalheLivro,
        setDetalheLivro
    ] = useState<DetalheLivroTDO | null>(null);

    useEffect(() => {
        const carregaDetalheLivro = async() => {
            const livroId = route.params.livroId;

            const resposta = await buscaDetalheLivro(livroId);
            const json = await resposta.json();
            
            setDetalheLivro(json);
        }

        carregaDetalheLivro();
    }, []);

    if(detalheLivro === null) {
        return <View style={{flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator size={42} color="#023e8a" />
        </View>
    }

    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#e7f5f8"
                />
            <ScrollView style={{flex: 1}}>
                <View style={{
                    flex: 1,
                    backgroundColor: '#fff'
                }}>
                    <View style={{
                        backgroundColor: '#e7f5f8',
                        padding: 16,
                    }}>
                        <View>
                            <TouchableOpacity
                                onPress={
                                    () => { navigation.goBack(); }
                                }>
                                <Icon name="arrow-left" size={24} color="black"></Icon>
                            </TouchableOpacity>
                        </View>
                        <CapaLivro
                            resizeMode="contain"
                            source={{
                                uri: detalheLivro.imagem
                            }}
                        />
                        <Titulo>{detalheLivro.nome}</Titulo>
                        <Autor>{detalheLivro.autor}</Autor>
                    </View>

                    <View style={{ padding: 16, marginTop: 8 }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginBottom: 8
                        }}>Descrição</Text>
                        <DescricaoLivro>{detalheLivro.descricao}</DescricaoLivro>
                    </View>

                </View>
            </ScrollView>
            <BotaoAdicionarFavoritos>
                <Text style={{
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: 'bold'
                }}>Adicionar aos favoritos</Text>
            </BotaoAdicionarFavoritos>
        </>
    );
}

export default DetalheLivro;