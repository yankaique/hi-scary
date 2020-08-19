import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
`;

export const HeaderArea = styled.View`
    flex:1;
    flex-direction:row;
    justify-content:center;
    margin-top:20%;
`;

export const Icon = styled.Image`
    height:34px;
    width:34px;
    align-items:center;
`;

export const Title = styled.Text`
    font-size:25px;
`

export const InputArea = styled.View`
    flex:6;
    align-items:center;
`;

export const Input = styled.TextInput`
    border-bottom-width:1px;
    border-bottom-color:#FD9822;
    width: 90%;
    margin-left:20px;
    margin-top:30px;
    padding:3px;
`;

export const PostButton = styled.TouchableOpacity`
    background-color: #fd9822;
    height:50px;
    width:70px;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    margin-top:30px;
`;

export const TextButton = styled.Text`
    color:#FFF;
    font-size:15px;
`;