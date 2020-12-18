import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
`;

export const CapaLivro = styled.Image`
    width: 100%;
    height: 256px;
    marginTop: 24px;
`;

export const Titulo = styled.Text`
    text-align: center;
    font-size: 24px;
    margin-top: 16px;
    font-weight: bold;
`;

export const Autor = styled.Text`
    color: #aaa;
    font-size: 18px;
    margin-bottom: 4px;
    text-align: center;
`;

export const DescricaoLivro = styled.Text`
    color: #aaa;
    fontSize: 20px;
`;

export const BotaoAdicionarFavoritos = styled.TouchableOpacity`
    background-color: #023e8a;
    height: 56px;
    border-radius: 8px;
    margin: 16px;
    align-items: center;
    justify-content: center;
`;