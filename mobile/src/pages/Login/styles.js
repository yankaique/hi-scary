import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color:#2F0743;
    justify-content:center;
    align-items:center;
`;

export const Middle = styled.View`
    justify-content:center;
    align-items:center;
    background-color: #fff;
    height:400px;
    width: 90%;
    border-radius:10px;
`;

export const IconArea = styled.View`
    flex-direction:row;
`;

export const Icon = styled.Image`
    width:50px;
    height:50px;
    margin-bottom:50px;

`;

export const Input = styled.TextInput`
    border-bottom-width:1px;
    border-bottom-color:#FD9822;
    padding:1px;
    padding-left:5px;
    width:90%;
    margin-bottom:50px;
    border-radius:5px;
`;

export const LoginButton = styled.TouchableOpacity`
    background-color:#FD9822;
    border-radius:10px;
    width:20%;
    height:40px;
    justify-content:center;

`;
    
export const Text = styled.Text`
    text-align:center;
    color:#fff;
`;

