import React from 'react';
import {
    ButtonContainer,
    Container,
    InputContainer,
    SignUpUserText,
    SignUpEstablishmentText,
} from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

interface SignUpUserProps {
    setScreen: (value: string) => void;
    userType: 'user' | 'establishment';
}

export const SignUpStablishment = ({
    setScreen,
    userType,
}: SignUpUserProps): JSX.Element => {
    return (
        <Container>
            {userType === 'establishment' ? (
                <SignUpEstablishmentText>
                    Cadastro de Estabelecimento
                </SignUpEstablishmentText>
            ) : (
                <SignUpUserText>Cadastro de Usuário</SignUpUserText>
            )}

            <InputContainer>
                <Input name="name" icon="users" placeholder="Nome Completo" />
                <Input name="user" icon="user" placeholder="CPF" />
                <Input name="email" icon="mail" placeholder="E-mail" />
                {userType === 'establishment' && (
                    <Input
                        name="street-address"
                        icon="map-pin"
                        placeholder="Endereço"
                    />
                )}
                <Input name="password" icon="lock" placeholder="Senha" />
                <Input
                    name="password"
                    icon="lock"
                    placeholder="Repetir Senha"
                />
            </InputContainer>

            <ButtonContainer>
                <Button onPress={() => {}}> CADASTRAR </Button>
            </ButtonContainer>
        </Container>
    );
};

export default SignUpStablishment;
