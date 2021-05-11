import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import {
    ButtonContainer,
    Container,
    CreateAccountButton,
    CreateAccountButtonText,
    InputContainer,
    ForgotPassword,
    ForgotPasswordText,
    LoginText,
    LoginContainer,
    Title,
    TitleSpan,
    TitleContainer,
    Image,
} from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import MapImg from '../../assets/map.png';

const SignIn: React.FC = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex: 1 }}
                >
                    <Container>
                        <TitleContainer>
                            <Title>Coron</Title>
                            <TitleSpan>Away</TitleSpan>
                        </TitleContainer>
                        {/* <Image source={MapImg} /> */}
                        <LoginContainer>
                            <LoginText>Login</LoginText>
                        </LoginContainer>

                        <InputContainer>
                            <Input
                                name="user"
                                icon="user"
                                placeholder="CPF/CNPJ"
                            />
                            <Input
                                name="password"
                                icon="lock"
                                placeholder="Senha"
                            />
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

                        <CreateAccountButton
                            onPress={() => navigation.navigate('SignUpOptions')}
                        >
                            <CreateAccountButtonText>
                                Cadastrar-se
                            </CreateAccountButtonText>
                        </CreateAccountButton>
                    </Container>
                    <ForgotPassword>
                        <ForgotPasswordText>
                            Esqueceu a senha?
                        </ForgotPasswordText>
                    </ForgotPassword>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default SignIn;
