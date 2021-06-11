import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    CreateAccountButton,
    CreateAccountButtonText,
    ForgotPassword,
    ForgotPasswordText,
    SignUpText,
    Title,
    TitleSpan,
    TitleContainer,
    ButtonContainer,
} from './styles';

import Button from '../../components/Button';
import ImageBackGround from '../../components/ImageBackGround';

const SignUp: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <ImageBackGround />
            <TitleContainer>
                <Title>Coron</Title>
                <TitleSpan>Away</TitleSpan>
            </TitleContainer>

            <SignUpText>Cadastrar</SignUpText>

            <ButtonContainer>
                <Button>Usuário</Button>
            </ButtonContainer>
            <Button>Estabelecimento</Button>
        </Container>
    );
};

export default SignUp;
