import React from 'react';
import {Container,Title, HeaderArea, Icon,  InputArea, Input} from './styles';

const PostHistoryScreen = () =>{
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
            </InputArea>
        </Container>
    );
}

export default PostHistoryScreen;