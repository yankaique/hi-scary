import React from 'react';
import {Container, 
        Title,
        Icon,
        Description,
        Text,
        Scroll,
        ButtonView,
        Button} from './styles';

 

const HistoryScreen = () =>{
    return(
        <Scroll>
            <Container>
                <Icon source={require('../../assets/pumpkin.png')} />
                <Title>Hello World</Title>
                <Description>Uma história bizarrezima</Description>
                <Text>Enim velit quis Lorem ad. Amet nulla do ad cupidatat quis sit est amet in consectetur. Esse reprehenderit tempor in ut qui. Excepteur adipisicing minim aliqua eu. Ullamco pariatur in ea sunt cupidatat elit et labore non.</Text>
                <ButtonView>
                    <Button onPress={()=>{}}>
                        <Icon source={require('../../assets/star.png')}/>
                    </Button>
                    <Button onPress={()=>{}}>
                        <Icon source={require('../../assets/caution.png')}/>
                    </Button>
                </ButtonView>
            </Container>
        </Scroll>
    )
};

export default HistoryScreen;