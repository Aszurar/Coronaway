import React from 'react';
import {
	ButtonContainer,
	Container,
	CreateAccountButton,
	CreateAccountButtonText,
	InputContainer,
	ForgotPassword,
	ForgotPasswordText,
	LoginText,
} from './styles';

import Button from '../Button';
import Input from '../Input';
interface LoginProps {
	setScreen: (value: string) => void;
	setLastScreen: (value: string) => void;
}

export const Login = ({ setScreen, setLastScreen }: LoginProps): JSX.Element => {
	return (
		<Container>
			<LoginText>Login</LoginText>

			<InputContainer>
				<Input name="user" icon="user" placeholder="CPF/CNPJ" />
				<Input name="password" icon="lock" placeholder="Senha" />
			</InputContainer>

			<ButtonContainer>
				<Button onPress={() => { }}> ENTRAR </Button>
			</ButtonContainer>

			<CreateAccountButton>
				<CreateAccountButtonText onPress={() => {
					setScreen('SignUp');
					setLastScreen('Login');
				}}
				>Cadastrar-se
					</CreateAccountButtonText>
			</CreateAccountButton>

			<ForgotPassword onPress={() => setScreen('ForgotPassword')}>
				<ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
			</ForgotPassword>
		</Container >
	)
}