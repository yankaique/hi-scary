import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
`;

export const ScrollArea = styled.ScrollView``;

export const HeaderArea = styled.View`
    flex:1;
    flex-direction:row;
    justify-content:center;
    margin-top:20%;
`;

export const Icon = styled.Image`
    height:30px;
    width:30px;
    align-items:center;
`;

export const Title = styled.Text`
    font-size:20px;
`

export const InputArea = styled.View`
    flex:7;
    align-items:center;
    margin-bottom:30px;
`;

export const PickerArea = styled.View`
    border-bottom-width:1px;
    border-bottom-color:#fd9822;
    height: 50px; 
    width: 90%;
    margin-top:15px;
`;

export const Input = styled.TextInput`
    border-bottom-width:1px;
    border-bottom-color:#FD9822;
    width: 90%;
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