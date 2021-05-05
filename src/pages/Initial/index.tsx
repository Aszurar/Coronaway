import React, { useState } from 'react';
import {
    Container,
    Title,
    TitleSpan,
    TitleContainer,
    ImageBg,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { Login } from '../../components/Login'
import { SignUp } from '../../components/SignUp'
import { SignUpUser } from '../../components/SignUpUser';

import BackgroundMap from '../../assets/images/map.png'

const Initial: React.FC = () => {
    const navigation = useNavigation();
    const [screen, setScreen] = useState('Login')
    const [userType, setUserType] = useState<'' | 'user' | 'establishment'>('')

    return (
        <Container>
            <ImageBg source={BackgroundMap} />
            <TitleContainer>
                <Title>Coron</Title>
                <TitleSpan>Away</TitleSpan>
            </TitleContainer>

            {screen === 'Login' && <Login setScreen={setScreen} />}
            {screen === 'SignUp' && <SignUp setUserType={setUserType} setScreen={setScreen} />}
            {screen === 'SignUpUser' && <SignUpUser setScreen={setScreen} userType={userType as 'user' | 'establishment'} />}
        </Container>
    );
}

export default Initial;