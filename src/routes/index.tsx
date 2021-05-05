import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import SignUpUser from '../pages/SignUpUser';
import Initial from '../pages/Initial';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#343C44' },
        }}
        initialRouteName="Initial"
    >
        <Auth.Screen name="SignIn" component={SignIn} />
        <Auth.Screen name="SignUp" component={SignUp} />
        <Auth.Screen name="SignUpUser" component={SignUpUser} />
        <Auth.Screen name="Initial" component={Initial} />
    </Auth.Navigator>
);

export default AuthRoutes;
