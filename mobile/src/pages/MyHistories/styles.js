import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #2F0743;
    flex:1;
`;

export const Scroll = styled.ScrollView`
    flex:9;
`;

export const Header = styled.View`
    flex:1;
    flex-direction:row;
    justify-content:center;
    margin-top:20%;
`;

export const HistoryArea = styled.View`
    background-color: #fd9822;
    margin-top:30px;
    height:70px;
    width:90%;
    margin-left:10px;
    border-radius:10px;
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
    padding-right:30px;
`;

export const Title = styled.Text`
    font-size:20px;
    color:#FFF;
    margin-left:10px;
`;

export const Icon = styled.Image`
    width:30px;
    height:30px;
`;

export const TrashIcon = styled.Image`
    height:30px;
    width:30px;
`;

export const TrashButton = styled.TouchableOpacity``;

export const ListMyHistory = styled.FlatList`
    margin-bottom:30px;
`;
