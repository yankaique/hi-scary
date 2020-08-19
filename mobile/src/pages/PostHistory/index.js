import React from 'react';
import {Container,Title, HeaderArea, Icon,  InputArea, Input, PostButton, TextButton} from './styles';
import {useNavigation} from '@react-navigation/native';

const PostHistoryScreen = () =>{
    const navigation = useNavigation();

    const handleHistoriesButton = ()=>{
        navigation.navigate('Items');
    }

    return(
        <Container>
            <HeaderArea>
                <Icon source={require('../../assets/pumpkin.png')}/>
                <Title> | Post your history</Title>
            </HeaderArea>
            <InputArea>
                <Input placeholder="Title..." />
                <Input placeholder="Subscription..." />
                <Input placeholder="History..." multiline={true} numberOfLines={10}/>
                <PostButton onPress={handleHistoriesButton}>
                    <TextButton>
                        Post
                    </TextButton>
                </PostButton>
            </InputArea>
        </Container>
    );
}

export default PostHistoryScreen;