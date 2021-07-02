import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { ButtonContainer, ButtonSpace, Container, OptionsText, CoronaContainer, CoronaImg } from './styles';

import Button from '../../components/Button';
import BackButton from '../../components/BackButton';
import Corona from '../../assets/corona.png'

const QrOptions: React.FC = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BackButton />
            <Container>
                <OptionsText>Selecione uma opção</OptionsText>

                <ButtonContainer>
                    <Button onPress={() => {
                        navigation.navigate('QrScan');
                    }}
                    >
                        Escanear QR Code
                    </Button>
                    <ButtonSpace />
                    <Button
                        onPress={() => {
                            navigation.navigate('QrCodeView');
                        }}
                    >
                        Visualizar QR Code
                    </Button>
                </ButtonContainer>
            </Container>
            <CoronaContainer>
                <CoronaImg source={Corona} />
            </CoronaContainer>
        </SafeAreaView>
    );
};

export default QrOptions;
