import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ListaLivrosDTO } from '../../screens/ListaLivros';
import { ContainerBotao, LivroImage, Titulo, Autor } from './styles';

interface LivroProps {
  data: ListaLivrosDTO;
}

const Livro = (props: LivroProps) => {
  const navigation = useNavigation();

  return (
    <ContainerBotao
      onPress={() => {
        navigation.navigate('DetalheLivro', {
          livroId: props.data.id,
        });
      }}
    >
      <LivroImage
        resizeMode="cover"
        source={{ uri: props.data.imagem }}
      />
      <Titulo>{props.data.nome}</Titulo>
      <Autor>{props.data.autor}</Autor>
    </ContainerBotao>
  );
}

export default Livro;