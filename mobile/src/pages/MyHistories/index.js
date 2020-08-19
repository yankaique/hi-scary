import React from 'react';
import {Container, Title,ListMyHistory,HistoryArea} from './styles';

import items from './data';

const MyHistoriesScreen = () =>{
    return(
        <Container>
            <ListMyHistory 
                data={items}
                renderItem={({item})=>(
                    <HistoryArea>
                        <Title>
                            {item.title}
                        </Title>
                    </HistoryArea>
                    )}
                keyExtractor={item=>item.key}
            />
        </Container>
    );
}

export default MyHistoriesScreen;