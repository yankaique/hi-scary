import styled from 'styled-components';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color: #2F0743;
`;

export const Background = styled.ImageBackground`
    flex:1;
`;

export const Middle = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
`;

export const Text = styled.Text`
    color: #E44A13;
`;

export const Icon = styled.Image`
    width:100px;
    height:100px;
`;


export const ButtonArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
    margin:30px;
    background-color:#FD9822;
    padding:10px;
    border-radius:10px;
`;

export const ButtonText = styled.Text`
    color: #FFF;
    font-size:20px;
`;


