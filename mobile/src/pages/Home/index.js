import React from 'react';
import {Container,Text,Icon,Middle,ButtonArea,Button,ButtonText,Background} from './styles';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () =>{
    const navigation = useNavigation();

    const handleLoginButton = ()=>{
        navigation.navigate('Login');
    }


    return(
        <Container>
            <Background source={require('../../assets/star-background.png')}>
                <Middle>
                    <Icon source={require('../../assets/pumpkin.png')}/>
                    <Text style={{fontSize:35, color:'#fff', marginTop:20}}>Welcome Stranger</Text>
                    <ButtonArea>
                        <Button onPress={()=>{}}>
                            <ButtonText>Sign up</ButtonText>
                        </Button>
                        <Button onPress={handleLoginButton}>
                            <ButtonText>Log in</ButtonText>
                        </Button>
                    </ButtonArea>
                </Middle>
            </Background>
        </Container>
    );
}

export default HomeScreen;