import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Image, StatusBar, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CapaLivro, Titulo, Autor, DescricaoLivro, BotaoAdicionarFavoritos } from './styles';

const DetalheLivro = () => {
    const navigation = useNavigation();

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
                            source={require('../../assets/images/very-nice.jpg')}
                        />
                        <Titulo>Título do livro</Titulo>
                        <Autor>Nome do autor</Autor>
                    </View>

                    <View style={{ padding: 16, marginTop: 8 }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginBottom: 8
                        }}>Descrição</Text>
                        <DescricaoLivro>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus natus, nobis numquam repellat quo nesciunt architecto, iusto, voluptates aliquam iure sapiente neque sunt. Distinctio ab qui eligendi accusantium eaque?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum amet, vitae dignissimos neque sit laboriosam, tempore, laudantium eum doloremque repellat possimus deleniti itaque quasi qui praesentium nam ad! Dolor, nobis?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, pariatur? Soluta deserunt quisquam consequatur a exercitationem molestias esse rem optio accusantium repellendus, modi quod, corporis odit sunt aspernatur commodi at.</DescricaoLivro>
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