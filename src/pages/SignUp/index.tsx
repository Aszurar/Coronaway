import React from 'react';
import {
    Container,
    CreateAccountButton,
    CreateAccountButtonText,
    ForgotPassword,
    ForgotPasswordText,
    LoginText,
    Title,
    TitleSpan,
    TitleContainer,
} from './styles';

import Button from '../../components/Button';

const SignIn: React.FC = () => (
    <Container>
        <TitleContainer>
            <Title>Coron</Title>
            <TitleSpan>Away</TitleSpan>
        </TitleContainer>

        <LoginText>Login</LoginText>

        <Button>ENTRAR</Button>

        <CreateAccountButton>
            <CreateAccountButtonText>Cadastrar-se</CreateAccountButtonText>
        </CreateAccountButton>

        <ForgotPassword>
            <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
        </ForgotPassword>
    </Container>
);

export default SignIn;
