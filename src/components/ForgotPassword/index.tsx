import React from 'react';
import {
    ButtonContainer,
    Container,
    InputContainer,
    ForgotPasswordText,
} from './styles';

import Button from '../Button';
import Input from '../Input';
import { Alert } from 'react-native';

interface ForgotPasswordProps {
    setScreen: (value: string) => void;
}

export const ForgotPassword = ({ setScreen }: ForgotPasswordProps): JSX.Element => {
    return (
        <Container>
            <ForgotPasswordText>Digite seu e-mail</ForgotPasswordText>

            <InputContainer>
                <Input name="email" icon="mail" placeholder="E-mail" />
            </InputContainer>

            <ButtonContainer>
                <Button onPress={() => {
                    Alert.alert(
                        "Sucesso",
                        "E-mail de recuperação de senha enviado",
                        [{ text: "OK", onPress: () => setScreen('Login') }]);

                }}> ENVIAR </Button>
            </ButtonContainer>

        </Container >
    )
}