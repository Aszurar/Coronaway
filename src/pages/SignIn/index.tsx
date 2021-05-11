import React, { useRef, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup'; // responsável pela validação
import {
    Alert,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TextInput,
} from 'react-native';
import getValidationErrors from '../../utils/getValidationErrors';

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
    // referência para o input de password para que possamos manipula-lo no input de email
    // com o botão next para focaliza-lo
    const passwordInputRef = useRef<TextInput>(null);
    // referência para o formulário com a tipagem FormHandles que traz todos os métodos
    // necessários para se manipular formulários.
    // Vamos referência o formulário pois queremos criar um botão que submeta o formulário
    // e esse botão por padrão não existe no react-native. Com isso, vamos criá-lo.
    const formRef = useRef<FormHandles>(null);

    interface SignInFormData {
        user: string;
        password: string;
    }
    // método responsável por submeter o formulário para o back-end
    const handleSignIn = useCallback(async (data: SignInFormData) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string()
                    .email('Digite um e-mail válido')
                    .required('E-mail obrigatório'),
                password: Yup.string().required('Senha obrigatória'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            // await signIn({
            //     email: data.email,
            //     password: data.password,
            // });

            // history.push('/dashboard');
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);

                formRef.current?.setErrors(errors);

                return;
            }

            Alert.alert(
                'Erro na autenticação',
                'Ocorreu um erro ao fazer login, cheque as credenciais.',
            );
        }
    }, []);

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

                        <Form
                            ref={formRef}
                            onSubmit={handleSignIn}
                            style={{ width: '100%' }}
                        >
                            <InputContainer>
                                <Input
                                    name="user"
                                    icon="user"
                                    placeholder="CPF/CNPJ"
                                    autoCapitalize="none"
                                    keyboardType="numeric"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        passwordInputRef.current?.focus();
                                    }}
                                />
                                <Input
                                    ref={passwordInputRef}
                                    name="password"
                                    icon="lock"
                                    placeholder="Senha"
                                    secureTextEntry
                                    returnKeyType="send"
                                    onSubmitEditing={() => {
                                        formRef.current?.submitForm();
                                    }}
                                />
                            </InputContainer>

                            <ButtonContainer>
                                <Button
                                    onPress={() => {
                                        formRef.current?.submitForm();
                                    }}
                                >
                                    ENTRAR
                                </Button>
                            </ButtonContainer>
                        </Form>

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
