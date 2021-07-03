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
import api from '../../services/api';
import { useState } from 'react';

export const SignUpStablishment: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const cnpjInputRef = useRef<TextInput>(null);
    const capacityInputRef = useRef<TextInput>(null);
    const emailInputRef = useRef<TextInput>(null);
    const passwordInputRef = useRef<TextInput>(null);
    const repeatPasswordInputRef = useRef<TextInput>(null);

    const [getLatitude, setGetLatitude] = useState('')
    const [getLongitude, setGetLongitude] = useState('')

    const navigation = useNavigation()

    interface SignUpFormData {
        name: string;
        cnpj: string;
        capacidade: string;
        email: string;
        password: string;
    }

    const handleSignUp = useCallback(async ({
        name,
        cnpj,
        email,
        password,
    }: SignUpFormData, getLatitude, getLongitude) => {

        // console.log(data)
        // console.log(getLatitude, getLongitude)

        const newData = {
            name,
            cnpj,
            email,
            password,
            latitude: getLatitude,
            longitude: getLongitude
        }
        console.log(newData)

        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                cnpj: Yup.string().required('Cnpj obrigatório')
                    .min(12, 'Necessário 12 dígitos').max(12, 'Necessário 12 dígitos'),
                email: Yup.string()
                    .email('Digite um e-mail válido')
                    .required('E-mail obrigatório'),
                password: Yup.string().min(6, 'No mínimo 6 dígitos')
                    .required('Senha obrigatória'),
                repeatPassword: Yup.string().min(6, 'No mínimo 6 dígitos')
                    .required('Senha obrigatória'),
                // .oneOf([Yup.ref('password'), null], 'Passwords does not match'),
            });

            await schema.validate(newData, {
                abortEarly: false,
            });

            await api.post('/establishments', newData);

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
                            onSubmit={(data) => handleSignUp(data, getLatitude, getLongitude)}
                            style={{ width: '100%' }}
                        >
                            <InputContainer>
                                <Input
                                    name="name"
                                    icon="user"
                                    placeholder="Nome do Estabelecimento"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        cnpjInputRef.current?.focus();
                                    }}
                                />

                                <Input
                                    ref={cnpjInputRef}
                                    name="cnpj"
                                    icon="users"
                                    placeholder="CNPJ"
                                    autoCapitalize="words"
                                    keyboardType="numeric"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        capacityInputRef.current?.focus();
                                    }}
                                />

                                <AddressView>
                                    <FeatherIcon name='map-pin' color='white' size={20} />
                                    <AddressText> Endereço</AddressText>
                                </AddressView>
                                <SetLocation getLocation={(latitude: string, longitude: string) => { setGetLatitude(String(latitude)); setGetLongitude(String(longitude)) }} />

                                {/* <Input
                                    ref={capacityInputRef}
                                    name="capacidade"
                                    icon="user-plus"
                                    placeholder="Capacidade de lotação"
                                    autoCapitalize="words"
                                    keyboardType="numeric"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        emailInputRef.current?.focus();
                                    }}
                                /> */}

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
                                    placeholder="Senha (Mínimo 6 dígitos)"
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

export default SignUpStablishment;
