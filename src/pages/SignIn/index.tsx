import React from 'react';
import {
    Container,
    CreateAccountButton,
    CreateAccountButtonText,
    InputContainer,
    ForgotPassword,
    ForgotPasswordText,
    LoginText,
    Title,
    TitleSpan,
    TitleContainer,
} from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => (
    <Container>
        <TitleContainer>
            <Title>Coron</Title>
            <TitleSpan>Away</TitleSpan>
        </TitleContainer>

        <LoginText>Login</LoginText>

        <InputContainer>
            <Input name="user" icon="account" placeholder="CPF/CNPJ" />
            <Input name="password" icon="lock" placeholder="Senha" />
        </InputContainer>
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
