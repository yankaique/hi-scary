import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../pages/Home';
import LoginScreen from '../pages/Login';
import RegisterScreen from '../pages/Register';
import HistoryScreen from '../pages/History';
import DrawerRoute from './DrawerNavigator';

const MainStack = createStackNavigator();


const StackRoute = () =>{
    return(
            <MainStack.Navigator screenOptions={{
                headerShown:false
            }}>
                <MainStack.Screen name="Home" component={HomeScreen} options={{
                    headerShown: false
                }}/>
                <MainStack.Screen name="Login" component={LoginScreen} />
                <MainStack.Screen name="Register" component={RegisterScreen} />
                <MainStack.Screen name="History" component={HistoryScreen} />
                <MainStack.Screen name="Histories" component={DrawerRoute} />
            </MainStack.Navigator>
    );
}

export default StackRoute;