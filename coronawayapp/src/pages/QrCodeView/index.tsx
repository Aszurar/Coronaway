import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Container, QrText, QrContainer } from './styles';
import QRCode from 'react-native-qrcode-svg';

import BackButton from '../../components/BackButton';
import { useAuth } from '../../hooks/auth';

interface UserProps {
    id: string
}
interface UserInterface {
    user: {
        id: string
    }
}


const QrCodeView: React.FC = () => {
    const { user } = useAuth()
    const [qrValue, setQrValue] = useState('');
    const { id } = user as UserInterface
    setQrValue(id)
    console.log('user scan ->', id)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BackButton />
            <Container>
                <QrText>Escanear QR Code</QrText>
                <QrContainer>
                    <View style={styles.containerQr}>
                        <QRCode
                            value={qrValue ? qrValue : 'NA'}
                            size={250}
                            color="black"
                            backgroundColor="white"
                            logoSize={30}
                            logoMargin={2}
                            logoBorderRadius={15}
                            logoBackgroundColor="yellow"
                        />
                    </View>
                </QrContainer>
            </Container>
        </SafeAreaView>
    );
};

export default QrCodeView;

const styles = StyleSheet.create({
    containerQr: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})