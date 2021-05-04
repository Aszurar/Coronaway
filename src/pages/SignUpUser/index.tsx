import React from 'react';
import { Platform } from 'react-native';
import {
	ButtonContainer,
	Container,
	InputContainer,
	SignUpUserText,
	SignUpEstablishmentText,
	Title,
	TitleSpan,
	TitleContainer,
	ImageBg,
	KeyboardAV,
} from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

import BackgroundMap from '../../assets/images/map.png'
import { useNavigation } from '@react-navigation/core';

// type route = {
// 	navigation: StackNavigationProp<Props>;
// };

// { Establishment }: SignUpUserProps

const SignUpUser: React.FC = ({ route }: any) => {
	const navigation = useNavigation();
	const { itemId } = route.params;

	return (
		<Container>
			<ImageBg source={BackgroundMap} />
			<KeyboardAV
				behavior={Platform.OS === 'android' ? 'padding' : undefined}
			>
				<TitleContainer>
					<Title>Coron</Title>
					<TitleSpan>Away</TitleSpan>
				</TitleContainer>

				{itemId ?
					<SignUpEstablishmentText>Cadastro de Estabelecimento</SignUpEstablishmentText>
					: <SignUpUserText>Cadastro de Usuário</SignUpUserText>}

				<InputContainer>
					<Input name="name" icon="users" placeholder="Nome Completo" />
					<Input name="user" icon="user" placeholder="CPF" />
					<Input name="email" icon="mail" placeholder="E-mail" />
					{itemId && <Input name="street-address" icon="map-pin" placeholder="Endereço" />}
					<Input name="password" icon="lock" placeholder="Senha" />
					<Input name="password" icon="lock" placeholder="Repetir Senha" />
				</InputContainer>

				<ButtonContainer>
					<Button
						onPress={() => {
							console.log('sorvetão');
						}}
						style={{ height: '25%' }}
					>
						CADASTRAR
                    </Button>
				</ButtonContainer>
			</KeyboardAV>
		</Container>
	);
}

export default SignUpUser;
