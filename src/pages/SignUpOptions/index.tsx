import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {
    ButtonContainer,
    ButtonSpace,
    Container,
    CreateAccountButton,
    CreateAccountButtonText,
    GoBackToLogin,
    GoBackToLoginText,
    LoginText,
    LoginContainer,
    Title,
    TitleSpan,
    TitleContainer,
    Image,
} from './styles';
import Button from '../../components/Button';
import MapImg from '../../assets/map.png';

const SignUpOptions: React.FC = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
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
                        <TitleContainer>
                            <Title>Coron</Title>
                            <TitleSpan>Away</TitleSpan>
                        </TitleContainer>
                        {/* <Image source={MapImg} /> */}
                        <LoginContainer>
                            <LoginText>Cadastrar</LoginText>
                        </LoginContainer>

                        <ButtonContainer>
                            <Button
                                onPress={() => {
                                    console.log('sorvetão');
                                }}
                            >
                                Usuário
                            </Button>
                            <ButtonSpace />
                            <Button
                                onPress={() => {
                                    console.log('sorvetão');
                                }}
                            >
                                Estabelecimento
                            </Button>
                        </ButtonContainer>
                    </Container>
                    <GoBackToLogin onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left" size={20} color="#06bd58" />
                        <GoBackToLoginText>
                            Voltar para o login
                        </GoBackToLoginText>
                    </GoBackToLogin>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default SignUpOptions;
