import React from 'react';
import {
    Container,
    SignUpText,
    Title,
    TitleSpan,
    TitleContainer,
    ButtonContainer,
    ImageBg,
} from './styles';

import BackgroundMap from '../../assets/images/map.png'
import Button from '../../components/Button';

import { useNavigation } from '@react-navigation/native';

const SignUp: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <ImageBg source={BackgroundMap} />
            <TitleContainer>
                <Title>Coron</Title>
                <TitleSpan>Away</TitleSpan>
            </TitleContainer>

            <SignUpText>Cadastrar</SignUpText>

            <ButtonContainer>
                <Button onPress={() => { navigation.navigate('SignUpUser', { itemId: false }) }}>USUÁRIO</Button>
            </ButtonContainer>
            <Button onPress={() => { navigation.navigate('SignUpUser', { itemId: true }) }}>ESTABELECIMENTO</Button>
        </Container>
    );
}

export default SignUp;