import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Livro from '../../components/Livro';


const ListaLivros = () => {
	const [listaDosLivros, setListaDosLivros] = useState([1, 2, 3, 4, 5, 6]);

	return(
		<View style={{backgroundColor: '#fff', flex: 1, padding: 8}}>
			<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 8}}>
				<View style={{flexDirection: 'row'}}>
					<Text style={{fontSize: 24}}>Olá, </Text>
					<Text style={{fontSize: 24, fontWeight: 'bold'}}>Pedro</Text>
				</View>
				<View style={{flexDirection: 'row'}}>
					<TouchableOpacity style={{
						height: 42, width: 42,
						alignItems: 'center', justifyContent: 'center',
						marginRight: 10
					}}>
						<Icon name='heart' size={30} color="#000"/>
					</TouchableOpacity>
					<TouchableOpacity style={{
						height: 42, width: 42,
						alignItems: 'center', justifyContent: 'center'
					}}>
						<Icon name='search' size={30} color="#000"/>
					</TouchableOpacity>
				</View>
			</View>
				
			<FlatList
				numColumns={2}
				style={{flex: 1, marginTop: 24 }}
				data={listaDosLivros}
				renderItem={item => <Livro />}
				keyExtractor={item => 'item' + item}
			/>
		</View>
	);
};

export default ListaLivros;