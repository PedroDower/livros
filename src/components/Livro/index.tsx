import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ContainerBotao, LivroImage, Titulo, Autor } from './styles';

const Livro = () => {
  const navigation = useNavigation();

  return (
    <ContainerBotao
      onPress={() => { navigation.navigate('DetalheLivro'); }}
    >
      <LivroImage
        resizeMode="cover"
        source={require('../../assets/images/very-nice.jpg')}
      />
      <Titulo>
        Nome do livro
      </Titulo>
      <Autor>
        Nome do autor
      </Autor>
    </ContainerBotao>
  );
}

export default Livro;