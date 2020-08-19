import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HistoriesScreen from '../pages/Histories';
import PostHistoryScreen from '../pages/PostHistory';
import MyHistoriesScreen from '../pages/MyHistories';


const Drawer = createDrawerNavigator();

const DrawerRoute = ()=>{
    return(
        <Drawer.Navigator initialRouteName="Histories">
            <Drawer.Screen name="PostHistory" component={PostHistoryScreen} options={{title:"Post history"}}/>
            <Drawer.Screen name="Items" component={HistoriesScreen} options={{title:"Histories"}}/>
            <Drawer.Screen name="MyHistories" component={MyHistoriesScreen} options={{title:"My Histories"}}/>
        </Drawer.Navigator>
    )
}

export default DrawerRoute