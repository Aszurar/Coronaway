import React from 'react';
import {
    ButtonContainer,
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
            <Input name="user" icon="user" placeholder="CPF/CNPJ" />
            <Input name="password" icon="lock" placeholder="Senha" />
        </InputContainer>

        <ButtonContainer>
            <Button
                onPress={() => {
                    console.log('sorvetão');
                }}
            >
                ENTRAR
            </Button>
        </ButtonContainer>

        <CreateAccountButton>
            <CreateAccountButtonText>Cadastrar-se</CreateAccountButtonText>
        </CreateAccountButton>

        <ForgotPassword>
            <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
        </ForgotPassword>
    </Container>
);

export default SignIn;
