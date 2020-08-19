import React from 'react';
import {Container, Middle, IconArea, Input, LoginButton, Text, Icon} from './styles';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = ()=>{
    const navigation = useNavigation();

    const handleButtonLogin = ()=>{
        navigation.navigate('Histories');
    }

    return(
        <Container>
            <Middle>
                <IconArea>
                    <Icon source={require('../../assets/pumpkin.png')}/>
                    <Text style={{color:'#566573',fontSize:30}}> | Login</Text>
                </IconArea>
                <Input placeholder='Login'/>
                <Input secureTextEntry={true} placeholder='Password'/>
                <LoginButton onPress={handleButtonLogin}>
                    <Text>Next</Text>
                </LoginButton>
            </Middle>
        </Container>
    );
}

export default LoginScreen;