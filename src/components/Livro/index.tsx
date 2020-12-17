import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';

const Livro = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={{
      flex: 1,
      margin: 8,
    }}
      onPress={() => { navigation.navigate('DetalheLivro'); }}
    >
      <Image
        style={{width: '100%', height: 250}}
        resizeMode="cover"
        source={require('../../assets/images/very-nice.jpg')}
      />
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
        Nome do livro
      </Text>
      <Text style={{fontSize: 14, color: '#aaa'}}>
        Nome do autor
      </Text>
    </TouchableOpacity>
  );
}

export default Livro;