import React, { useState, useEffect } from 'react';
import {
    Container,
    Title,
    TitleSpan,
    TitleContainer,
    ImageBg,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { Login } from '../../components/Login'
import { ForgotPassword } from '../../components/ForgotPassword'
import { SignUp } from '../../components/SignUp'
import { SignUpUser } from '../../components/SignUpUser';
import { BackHandler } from 'react-native';

import BackgroundMap from '../../assets/images/map.png'

const Initial: React.FC = () => {

    const navigation = useNavigation();
    const [lastScreen, setLastScreen] = useState('Login');
    const [screen, setScreen] = useState('Login');
    const [userType, setUserType] = useState<'' | 'user' | 'establishment'>('')

    const handleBackButton = (): boolean => {
        const last = lastScreen;
        setLastScreen(screen);
        setScreen(last);
        return true;
    }

    useEffect(() => {
        const componentDidMount = (): void => {
            BackHandler.addEventListener('hardwareBackPress', handleBackButton)
        }

        componentDidMount();
    }, []);

    return (
        <Container>
            <ImageBg source={BackgroundMap} />
            <TitleContainer>
                <Title>Coron</Title>
                <TitleSpan>Away</TitleSpan>
            </TitleContainer>

            {screen === 'Login' && <Login setScreen={setScreen} setLastScreen={setLastScreen} />}
            {screen === 'ForgotPassword' && <ForgotPassword setScreen={setScreen} />}
            {screen === 'SignUp' && <SignUp setUserType={setUserType} setScreen={setScreen} />}
            {screen === 'SignUpUser' && <SignUpUser setScreen={setScreen} userType={userType as 'user' | 'establishment'} />}
        </Container>
    );
}

export default Initial;