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
    ButtonContainer
} from './styles';

import Button from '../../components/Button';

const SignUp: React.FC = () => (
    <Container>
        <TitleContainer>
            <Title>Coron</Title>
            <TitleSpan>Away</TitleSpan>
        </TitleContainer>

        <LoginText>Cadastrar</LoginText>

        <ButtonContainer>
            <Button>Usuário</Button>
        </ButtonContainer>
        <Button>Estabelecimento</Button>

        <CreateAccountButton>
            <CreateAccountButtonText>Cadastrar-se</CreateAccountButtonText>
        </CreateAccountButton>

        <ForgotPassword>
            <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
        </ForgotPassword>
    </Container>
);

export default SignUp;
