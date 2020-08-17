import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HistoriesScreen from '../pages/Histories';
import PostHistoryScreen from '../pages/PostHistory';

const Drawer = createDrawerNavigator();

const DrawerRoute = ()=>{
    return(
        <Drawer.Navigator initialRouteName="Histories">
            <Drawer.Screen name="Items" component={HistoriesScreen} options={{title:"Histories"}}/>
            <Drawer.Screen name="PostHistory" component={PostHistoryScreen} options={{title:"Post history"}}/>
        </Drawer.Navigator>
    )
}

export default DrawerRoute