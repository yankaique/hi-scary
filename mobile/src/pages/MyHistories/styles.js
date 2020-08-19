import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #03001b;
    flex:1;
`;

export const Title = styled.Text`
    font-size:20px;
    color:#FFF;
    margin-left:10px;
`;

export const ListMyHistory = styled.FlatList`
    margin-top:20%;
`;

export const HistoryArea = styled.View`
    background-color: #fd9822;
    margin-top:30px;
    height:70px;
    width:90%;
    margin-left:10px;
    border-radius:10px;
    justify-content:center;
`;