import React from 'react';
import {Container,
        MenuButton,
        Menu,
        Text,
        Title,
        ItemsButton,
        ItemMenu,
        MenuArea,
        Icon,
        InfoArea,
        TitleItem} from './styles';
import {useNavigation} from '@react-navigation/native';
import items from './data';
import menuItems from './menuData';

const HistoriesScreen = () =>{
    
    const navigation = useNavigation();

    const handleHistoryButton = ()=>{
        navigation.navigate('History');
    }


    return(
        <Container>
            <Title>Histories</Title>
            <Menu 
                data={menuItems}
                renderItem={({item})=>(
                        <MenuButton>
                            <Text>
                                {item.title}
                            </Text>
                        </MenuButton>
                )}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            />
            <MenuArea>
                <ItemMenu 
                    data={items}
                    renderItem={({item})=>(
                            <ItemsButton onPress={handleHistoryButton}>
                                <InfoArea style={{flexDirection:'row'}}>
                                    <Icon source={require('../../assets/pumpkin.png')}/>
                                    <InfoArea style={{justifyContent:'center',marginLeft:5}}>
                                        <TitleItem>{item.title}</TitleItem>
                                        <Text>{item.text}</Text>
                                    </InfoArea>
                                </InfoArea>
                            </ItemsButton>
                    )}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </MenuArea>

            
        </Container>

    );
}

export default HistoriesScreen;