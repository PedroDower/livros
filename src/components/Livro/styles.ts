import styled from 'styled-components/native';

export const ContainerBotao = styled.TouchableOpacity`
    flex: 1;  
    margin: 8px;
`;

export const LivroImage = styled.Image`
    width: 100%;
    height: 250px;
`;

export const TextBold = styled.Text`
    font-weight: bold;
`;

export const Titulo = styled(TextBold)`
    font-size: 20px;
    margin-top: 10px;
`;

export const Autor = styled.Text`
    font-size: 17px;
    color: #aaa;
    margin-bottom: 8px;
`;