import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HistoriesScreen from '../pages/Histories';

const Drawer = createDrawerNavigator();

const DrawerRoute = ()=>{
    return(
        <Drawer.Navigator initialRouteName="Histories">
            <Drawer.Screen name="Items" component={HistoriesScreen} options={{title:"Histories"}}/>
        </Drawer.Navigator>
    )
}

export default DrawerRoute