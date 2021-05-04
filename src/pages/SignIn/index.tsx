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
import {useNavigation} from '@react-navigation/native';

import Button from '../../components/Button';
import Input from '../../components/Input';

import BackgroundMap from '../../assets/images/map.png'

const SignIn: React.FC = () => {
    const navigation = useNavigation();
    
    return(   
        <Container>
            <ImageBg  source={BackgroundMap}/>
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
                <CreateAccountButtonText onPress={() => {navigation.navigate('SignUp')}}
                    >Cadastrar-se</CreateAccountButtonText>
            </CreateAccountButton>

            <ForgotPassword>
                <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
            </ForgotPassword>
        </Container>
    );
}

export default SignIn;
