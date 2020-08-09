import React from 'react';
import {Container, Middle, IconArea, Input, LoginButton, Text, Icon} from './styles';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = ()=>{
    const navigation = useNavigation();

    const handleButtonHome = ()=>{
        navigation.navigate('Home');
    }

    return(
        <Container>
            <Middle>
                <IconArea>
                    <Icon source={require('../../assets/pumpkin.png')}/>
                    <Text style={{color:'#566573',fontSize:30}}> | Register</Text>
                </IconArea>
                <Input placeholder='Email'/>
                <Input placeholder='Nick name'/>
                <Input placeholder='Password'/>
                <LoginButton onPress={handleButtonHome}>
                    <Text>Register</Text>
                </LoginButton>
            </Middle>
        </Container>
    );
}

export default RegisterScreen;