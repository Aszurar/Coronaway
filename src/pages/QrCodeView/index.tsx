import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { Container, QrText, QrImage, QrContainer } from './styles';
import qrcode from '../../assets/qrcode.png'

import BackButton from '../../components/BackButton';

const QrCodeView: React.FC = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BackButton />
            <Container>
                <QrText>Escanear QR Code</QrText>
                <QrContainer>
                    <QrImage source={qrcode} />
                </QrContainer>
            </Container>
        </SafeAreaView>
    );
};

export default QrCodeView;
