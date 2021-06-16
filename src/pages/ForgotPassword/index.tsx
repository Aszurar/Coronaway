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
    TextInput,
} from 'react-native';

import getValidationErrors from '../../utils/getValidationErrors';

import {
    ButtonContainer,
    Container,
    InputContainer,
    PasswordText,
    PasswordTextContainer,
} from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ImageBackGround from '../../components/ImageBackGround';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';

const ForgotPassword: React.FC = () => {
    const navigation = useNavigation();

    const passwordInputRef = useRef<TextInput>(null);

    const formRef = useRef<FormHandles>(null);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BackButton />
            <ImageBackGround />
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >
                <Container>
                    <Title />

                    <PasswordTextContainer>
                        <PasswordText>Esqueci a senha</PasswordText>
                    </PasswordTextContainer>

                    <Form
                        ref={formRef}
                        onSubmit={() => console.log('Oi')}
                        style={{ width: '100%' }}
                    >
                        <InputContainer>
                            <Input
                                name="user"
                                icon="user"
                                placeholder="Digite seu CPF/CNPJ"
                                autoCapitalize="none"
                                keyboardType="numeric"
                                autoCorrect={false}
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                    passwordInputRef.current?.focus();
                                }}
                            />
                        </InputContainer>

                        <ButtonContainer>
                            <Button
                                onPress={() => {
                                    Alert.alert("Email enviado com sucesso.", "Verifique seu email para redefinir a sua senha.")
                                    formRef.current?.submitForm();
                                    navigation.navigate('SignIn')
                                }}
                            >
                                ENVIAR
                            </Button>
                        </ButtonContainer>
                    </Form>
                </Container>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default ForgotPassword;
