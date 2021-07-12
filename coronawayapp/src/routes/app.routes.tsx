import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Map from '../pages/Map';
import QrScan from '../pages/QrScan';
import CheckInConfirmation from '../pages/CheckInConfirmation';
import QrOptions from '../pages/QrOptions';
import QrCodeView from '../pages/QrCodeView';
import ControleManual from '../pages/ControleManual';
import Account from '../pages/Account';
import Sobre from '../pages/Sobre';
import Ajuda from '../pages/Ajuda';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
    <App.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#343C44' },
        }}
    >
        <App.Screen name="Map" component={Map} />
        <App.Screen name="QrScan" component={QrScan} />
        <App.Screen name="QrOptions" component={QrOptions} />
        <App.Screen name="ControleManual" component={ControleManual} />
        <App.Screen name="CheckInConfirmation" component={CheckInConfirmation} />
        <App.Screen name="Ajuda" component={Ajuda} />
        <App.Screen name="Sobre" component={Sobre} />
        <App.Screen name="Account" component={Account} />
        <App.Screen name="QrCodeView" component={QrCodeView} />
    </App.Navigator>
);

export default AppRoutes;
