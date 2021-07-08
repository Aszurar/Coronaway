import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup'; // responsável pela validação
import {
    Alert,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    TextInput,
} from 'react-native';
import {
    ButtonContainer,
    Container,
    InputContainer,
    InputsContainer,
    SignUpUserText,
    SignUpUserContainer,
} from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import Title from '../../components/Title';
import Input from '../../components/Input';
import ImageBackGround from '../../components/ImageBackGround';
import BackButton from '../../components/BackButton';
import api from '../../services/api';
interface SignUpFormData {
    name: string;
    cpf: string;
    email: string;
    password: string;
}

export const SignUpUser: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const cpfInputRef = useRef<TextInput>(null);
    const emailInputRef = useRef<TextInput>(null);
    const passwordInputRef = useRef<TextInput>(null);
    const repeatPasswordInputRef = useRef<TextInput>(null);

    const navigation = useNavigation()

    const handleSignUp = useCallback(async (data: SignUpFormData) => {
        console.log(data)
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                cpf: Yup.string().required('CPF obrigatório')
                    .min(11, 'Necessário 11 dígitos').max(11, 'Necessário 11 dígitos'),
                email: Yup.string()
                    .email('Digite um e-mail válido')
                    .required('E-mail obrigatório'),
                password: Yup.string().min(6, 'No mínimo 6 dígitos')
                    .required('Senha obrigatória'),
                repeatPassword: Yup.string().min(6, 'No mínimo 6 dígitos')
                    .required('Senha obrigatória'),
                // .oneOf([Yup.ref('password'), null], 'Passwords does not match'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            await api.post('/users', data);

            Alert.alert(
                "Cadastro Realizado!",
                "Cadastro de usuário realizado com sucesso!",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => navigation.navigate('SignIn') }
                ]
            );

            // history.push('/');
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);

                formRef.current?.setErrors(errors);

                return;
            }

            Alert.alert(
                'Erro no cadastro',
                'Ocorreu um erro ao fazer cadastro, tente novamente.',
            );
        }
    }, [navigation]);


    return (
        <Container>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >
                <ImageBackGround />
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex: 1 }}
                >
                    <BackButton />
                    <InputsContainer>
                        <Title />

                        <SignUpUserContainer>
                            <SignUpUserText>Cadastro de Usuário</SignUpUserText>
                        </SignUpUserContainer>

                        <Form
                            ref={formRef}
                            onSubmit={(data) => handleSignUp(data)}
                            style={{ width: '100%' }}
                        >
                            <InputContainer>
                                <Input
                                    name="name"
                                    icon="user"
                                    // minLenght="1"
                                    // maxLenght="30"
                                    placeholder="Nome Completo"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        cpfInputRef.current?.focus();
                                    }}
                                />

                                <Input
                                    ref={cpfInputRef}
                                    name="cpf"
                                    icon="user"
                                    placeholder="CPF"
                                    autoCapitalize="words"
                                    keyboardType="numeric"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        emailInputRef.current?.focus();
                                    }}
                                />


                                <Input
                                    ref={emailInputRef}
                                    name="email"
                                    icon="mail"
                                    placeholder="E-mail"
                                    autoCapitalize="none"
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
                                    style={{ fontFamily: 'itc-avant-garde-gothic-std-book' }}
                                    secureTextEntry
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        repeatPasswordInputRef.current?.focus();
                                    }}
                                />

                                <Input
                                    ref={repeatPasswordInputRef}
                                    name="repeatPassword"
                                    icon="lock"
                                    placeholder="Repetir Senha"
                                    secureTextEntry
                                    style={{ fontFamily: 'itc-avant-garde-gothic-std-book' }}
                                    returnKeyType="send"
                                    onSubmitEditing={() => {
                                        formRef.current?.submitForm();
                                    }}
                                />
                            </InputContainer>

                            <ButtonContainer>
                                <Button
                                    onPress={() => { formRef.current?.submitForm() }}
                                >
                                    CADASTRAR
                                </Button>
                            </ButtonContainer>
                        </Form>
                    </InputsContainer>
                </ScrollView>
            </KeyboardAvoidingView>
        </Container>
    );
};

export default SignUpUser;
