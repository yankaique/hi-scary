import React from 'react';
import {Container, Header, Icon, Title, ListMyHistory, HistoryArea, TrashButton, TrashIcon, Scroll} from './styles';

import items from './data';

const MyHistoriesScreen = () =>{
    return(
        <Container>
                <Header>
                    <Icon source={require('../../assets/pumpkin.png')}/>
                    <Title>| My Histories</Title>
                </Header>
            <Scroll>
                <ListMyHistory 
                    data={items}
                    renderItem={({item})=>(
                        <HistoryArea>
                            <Title>
                                {item.title}
                            </Title>
                            <TrashButton onPress={()=>{}}>
                                <TrashIcon source={require('../../assets/bin.png')}/>
                            </TrashButton>
                        </HistoryArea>
                        )}
                    keyExtractor={item=>item.key}
                />
                </Scroll>   
            </Container>
    );
}

export default MyHistoriesScreen;