import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Account from '../../pages/Account';
import SignUpOptions from '../../pages/SignUpOptions';

const Drawer = createDrawerNavigator();

export const SideBar = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Account" component={Account} />
                {/* <Drawer.Screen name="SignUpOptions" component={SignUpOptions} /> */}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default SideBar