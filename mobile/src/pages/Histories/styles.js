import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color:#2F0743;
`;

export const MenuButton = styled.TouchableOpacity`
    background-color:#FD9822;
    height:30px;
    width:80px;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    margin-left:10px;
    margin-top:10px;
    
`;

export const Menu = styled.FlatList`
    margin-right:3px;
`;


export const Title = styled.Text`
    color:#FFF;
    text-align:center;
    margin-top:25%;
    font-size:40px
`;

export const Text = styled.Text`
    color:#FFF;
    font-size:15px;
`;

export const MenuArea = styled.View`
    flex:10;
    width:100%;
    justify-content:center;
    align-items:center;
`;

export const ItemMenu = styled.FlatList`
    width:90%;
`;

export const ItemsButton = styled.TouchableOpacity`
    background-color:#FD9822;
    width:100%;
    height:90px;
    border-radius:10px;
    margin-top:15px;
`;

export const InfoArea = styled.View`
    flex:1;
    padding:10px;
`;

export const Icon = styled.Image`
    width:30px;
    height:30px;
    margin-top:13px;
`;

export const TitleItem = styled.Text`
    font-size:20px;
    font-weight:bold;
`;
