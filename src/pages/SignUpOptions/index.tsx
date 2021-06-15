import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';

import {
    ButtonContainer,
    ButtonSpace,
    Container,
    SignUpText,
    SignUpContainer,
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
            <BackButton />
            <Container>
                <Title />

                <SignUpContainer>
                    <SignUpText>Cadastrar</SignUpText>
                </SignUpContainer>

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
        </SafeAreaView>
    );
};

export default SignUpOptions;
