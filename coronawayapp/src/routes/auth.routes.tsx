import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUpOptions from '../pages/SignUpOptions';

import ForgotPassword from '../pages/ForgotPassword';
import SignUp from '../pages/SignUp';
import SignUpUser from '../pages/SignUpUser';
import SignUpStablishment from '../pages/SignUpStablishment';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#343C44' },
        }}
        initialRouteName="Signin"
    >
        <Auth.Screen name="SignIn" component={SignIn} />
        <Auth.Screen name="ForgotPassword" component={ForgotPassword} />
        <Auth.Screen name="SignUpOptions" component={SignUpOptions} />
        <Auth.Screen name="SignUp" component={SignUp} />
        <Auth.Screen name="SignUpUser" component={SignUpUser} />
        <Auth.Screen name="SignUpStablishment" component={SignUpStablishment} />
    </Auth.Navigator>
);

export default AuthRoutes;
