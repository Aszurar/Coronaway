import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup'; // responsável pela validação
import {
    Alert,
    View,
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
    AddressText,
    AddressView,
} from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import Title from '../../components/Title';
import Input from '../../components/Input';
import ImageBackGround from '../../components/ImageBackGround';
import BackButton from '../../components/BackButton';
import SetLocation from '../../components/GetLocation';
import FeatherIcon from "react-native-vector-icons/Feather";

export const SignUpStablishment: React.FC = () => {
    const passwordInputRef = useRef<TextInput>(null);
    const formRef = useRef<FormHandles>(null);

    const navigation = useNavigation()

    interface SignInFormData {
        user: string;
        password: string;
    }

    const handleSignIn = useCallback(async (data: SignInFormData) => {
        try {
            console.log(data);
            //     formRef.current?.setErrors({});
            //     const schema = Yup.object().shape({
            //         email: Yup.string()
            //             .email('Digite um e-mail válido')
            //             .required('E-mail obrigatório'),
            //         password: Yup.string().required('Senha obrigatória'),
            //     });
            //     await schema.validate(data, {
            //         abortEarly: false,
            //     });
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
        <Container>
            <ImageBackGround />
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >
                <ScrollView
                // keyboardShouldPersistTaps="handled"
                // contentContainerStyle={{ flex: 1 }}
                >
                    <BackButton />
                    <InputsContainer>
                        <Title />

                        <SignUpUserContainer>
                            <SignUpUserText>Cadastro de Estabelecimento</SignUpUserText>
                        </SignUpUserContainer>

                        <Form
                            ref={formRef}
                            onSubmit={handleSignIn}
                            style={{ width: '100%' }}
                        >
                            <InputContainer>
                                <Input
                                    name="userName"
                                    icon="user"
                                    placeholder="Nome Completo"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        passwordInputRef.current?.focus();
                                    }}
                                />

                                <Input
                                    name="user"
                                    icon="users"
                                    placeholder="CNPJ"
                                    autoCapitalize="words"
                                    keyboardType="numeric"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        passwordInputRef.current?.focus();
                                    }}
                                />

                                {/* <Input
                                    name="address"
                                    icon="map-pin"
                                    placeholder="Endereço"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        passwordInputRef.current?.focus();
                                    }}
                                /> */}
                                <AddressView>
                                    <FeatherIcon name='map-pin' color='white' size={20} />
                                    <AddressText> Endereço</AddressText>
                                </AddressView>
                                <SetLocation />

                                <Input
                                    name="user"
                                    icon="user-plus"
                                    placeholder="Capacidade de lotação"
                                    autoCapitalize="words"
                                    keyboardType="numeric"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        passwordInputRef.current?.focus();
                                    }}
                                />

                                <Input
                                    name="userEmail"
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
                                    secureTextEntry
                                    returnKeyType="send"
                                    onSubmitEditing={() => {
                                        formRef.current?.submitForm();
                                    }}
                                />

                                <Input
                                    ref={passwordInputRef}
                                    name="password"
                                    icon="lock"
                                    placeholder="Repetir Senha"
                                    secureTextEntry
                                    returnKeyType="send"
                                    onSubmitEditing={() => {
                                        formRef.current?.submitForm();
                                    }}
                                />
                            </InputContainer>
                        </Form>

                        <ButtonContainer>
                            <Button
                                onPress={() => {
                                    Alert.alert(
                                        "Cadastro Realizado!",
                                        "Cadastro de estabelecimento realizado com sucesso!",
                                        [
                                            {
                                                text: "Cancel",
                                                onPress: () => console.log("Cancel Pressed"),
                                                style: "cancel"
                                            },
                                            { text: "OK", onPress: () => navigation.navigate('SignIn') }
                                        ]
                                    );
                                }}
                            >
                                CADASTRAR
                            </Button>
                        </ButtonContainer>
                    </InputsContainer>
                </ScrollView>
            </KeyboardAvoidingView>
        </Container>
    );
};

export default SignUpStablishment;
