import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './pages/Home';
import LoginScreen from './pages/Login';
import HistoriesScreen from './pages/Histories';
import RegisterScreen from './pages/Register';



const MainStack = createStackNavigator();

const Routes = () =>{
    return(
        <NavigationContainer>
            <MainStack.Navigator screenOptions={{
                headerShown:false
            }}>
                <MainStack.Screen name="Home" component={HomeScreen} options={{
                    headerShown: false
                }}/>
                <MainStack.Screen name="Login" component={LoginScreen} />
                <MainStack.Screen name="Histories" component={HistoriesScreen} />
                <MainStack.Screen name="Register" component={RegisterScreen} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;