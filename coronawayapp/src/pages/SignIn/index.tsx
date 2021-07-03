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
} from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ImageBackGround from '../../components/ImageBackGround';
import Title from '../../components/Title';
import api from '../../services/api';

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
            // console.log(data);

            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                user: Yup.string()
                    .required('Dados obrigatórios')
                    .min(11, 'Necessário no minimo 11 dígitos').max(12, 'Necessário no máximo 12 dígitos'),
                password: Yup.string().required('Senha obrigatória'),
            });
            await schema.validate(data, {
                abortEarly: false,
            });

            // await signIn({
            //     email: data.email,
            //     password: data.password,
            // });

            {
                const { user, password } = data
                const cpf_user = {
                    cpf: user,
                    password
                }
                const cnpj_user = {
                    cnpj: user,
                    password
                }

                if (user.length === 11) {
                    console.log('piroquinha: ', cpf_user)
                    await api.post('./sessions', cpf_user)
                    navigation.navigate('Map')
                } else if (user.length === 12) {
                    console.log("cnpj")
                }
            }


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
            <ImageBackGround />
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
                        <Title />

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

                        <ForgotPassword
                            onPress={() => navigation.navigate('ForgotPassword')}
                        >
                            <ForgotPasswordText>
                                Esqueceu a senha?
                            </ForgotPasswordText>
                        </ForgotPassword>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default SignIn;
