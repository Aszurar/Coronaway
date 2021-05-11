import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
<<<<<<< HEAD
<<<<<<< HEAD
import SignUpOptions from '../pages/SignUpOptions';
=======
import SignUp from '../pages/SignUp';
>>>>>>> 21a226afe7b4210a2310a67de320fb28e1f9e493
=======
import SignUp from '../pages/SignUp';
>>>>>>> 21a226afe7b4210a2310a67de320fb28e1f9e493

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
<<<<<<< HEAD
<<<<<<< HEAD
        <Auth.Screen name="SignUpOptions" component={SignUpOptions} />
=======
        <Auth.Screen name="SignUp" component={SignUp} />
>>>>>>> 21a226afe7b4210a2310a67de320fb28e1f9e493
=======
        <Auth.Screen name="SignUp" component={SignUp} />
>>>>>>> 21a226afe7b4210a2310a67de320fb28e1f9e493
    </Auth.Navigator>
);

export default AuthRoutes;
