import React, { useState } from 'react';
import {
    Container,
    SignUpText,
    ButtonContainer,
} from './styles';

import Button from '../../components/Button';

interface SignUpProps {
    setScreen: (value: string) => void;
    setUserType: (value: 'user' | 'establishment') => void;
}

export const SignUp = ({ setScreen, setUserType }: SignUpProps): JSX.Element => {
    return (
        <Container>
            <SignUpText>Cadastrar</SignUpText>

            <ButtonContainer>
                <Button onPress={() => {
                    setUserType('user')
                    setScreen('SignUpUser')
                }}>USUÁRIO</Button>
            </ButtonContainer>
            <ButtonContainer>
                <Button onPress={() => {
                    setUserType('establishment')
                    setScreen('SignUpUser')
                }}>ESTABELECIMENTO</Button>
            </ButtonContainer>
        </Container>
    );
}