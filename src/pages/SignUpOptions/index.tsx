import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import {
    ButtonContainer,
    ButtonSpace,
    Container,
    LoginText,
    LoginContainer,
} from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import ImageBackGround from '../../components/ImageBackGround';
import BackButton from '../../components/BackButton';

const SignUpOptions: React.FC = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackGround />

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex: 1 }}
                >
                    <BackButton />
                    <Container>
                        <Title />

                        <LoginContainer>
                            <LoginText>Cadastrar</LoginText>
                        </LoginContainer>

                        <ButtonContainer>
                            <Button
                                onPress={() => {
                                    navigation.navigate('SignUpUser');
                                }}
                            >
                                Usuário
                            </Button>
                            <ButtonSpace />
                            <Button
                                onPress={() => {
                                    navigation.navigate('SignUpStablishment');
                                }}
                            >
                                Estabelecimento
                            </Button>
                        </ButtonContainer>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default SignUpOptions;
