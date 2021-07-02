import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUpOptions from '../pages/SignUpOptions';

import ForgotPassword from '../pages/ForgotPassword';
import SignUp from '../pages/SignUp';
import SignUpUser from '../pages/SignUpUser';
import SignUpStablishment from '../pages/SignUpStablishment';
import Map from '../pages/Map';
import QrScan from '../pages/QrScan';
import CheckInConfirmation from '../pages/CheckInConfirmation';
import QrOptions from '../pages/QrOptions';
import QrCodeView from '../pages/QrCodeView';
import Account from '../pages/Account';

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
        <Auth.Screen name="Map" component={Map} />
        <Auth.Screen name="QrScan" component={QrScan} />
        <Auth.Screen name="QrOptions" component={QrOptions} />
        <Auth.Screen name="CheckInConfirmation" component={CheckInConfirmation} />
        <Auth.Screen name="Account" component={Account} />
        <Auth.Screen name="QrCodeView" component={QrCodeView} />
    </Auth.Navigator>
);

export default AuthRoutes;
