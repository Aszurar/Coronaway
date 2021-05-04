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
    ImageBg,
} from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

import BackgroundMap from '../../assets/images/map.png'
import {useNavigation} from '@react-navigation/native';

const SignIn: React.FC = () => {
    const navigation = useNavigation();

    return(
        <ImageBg  source={BackgroundMap}>
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
                    <CreateAccountButtonText onPress={() => {navigation.navigate('SignUp');}}
                        >Cadastrar-se</CreateAccountButtonText>
                </CreateAccountButton>

                <ForgotPassword>
                    <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
                </ForgotPassword>
            </Container>
        </ImageBg>
    );
}

export default SignIn;
