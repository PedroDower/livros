import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #fff;
    flex: 1;
    padding: 8px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
`;

export const ContainerRow = styled.View`
    flex-direction: row;
`;

export const TextoHeader = styled.Text`
    font-size: 24px;
`;

export const NomeUsuario = styled(TextoHeader)`
    font-weight: bold;
`;

export const BotaoIcone = styled.TouchableOpacity`
    height: 42px;
    width: 42px;
    align-items: center;
    justify-content: center;
`;

export const ListagemLivro = styled.FlatList`
    flex: 1;
    marginTop: 24px;
`;