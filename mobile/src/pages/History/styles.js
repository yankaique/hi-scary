import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    align-items:center;
    margin-top:70px;
`;

export const Scroll = styled.ScrollView`
    flex:1;
`;

export const ButtonView = styled.View`
    flex-direction:row;
`;

export const Button = styled.TouchableOpacity`
    flex-direction:column;
    margin: 40% 60px 0px 60px;
`;

export const Title = styled.Text`
    font-size:25px;
    font-weight:bold;
`;

export const Icon = styled.Image`
    height:30px;
    width:30px;
`;

export const Description = styled.Text`
    font-style:italic;
    opacity:0.3;
`;

export const Text = styled.Text`
    margin:20px 10px 0 10px;
    text-align:center;
`;

