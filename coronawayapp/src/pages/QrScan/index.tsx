import React, { useState } from 'react'
import { View, TouchableWithoutFeedback, Text, Alert } from 'react-native'
import { BarCodeReadEvent, RNCamera } from 'react-native-camera';

import { Container, ScanTitleView, ScanTitle, ScanText } from './styles'
import { useNavigation } from '@react-navigation/native'
import Mask from '../../components/Mask';
import BackButton from '../../components/BackButton'

export const QrScan: React.FC = () => {
    const navigation = useNavigation()
    const [camera, setCamera] = useState<RNCamera>();

    const barcodeRecognized = ({ data }: BarCodeReadEvent) => {
        console.log('data: ', data)
        navigation.navigate('CheckInConfirmation', { data })

        // const [latitude, longitude] = data.split(',');
        // console.warn({latitude, longitude});

    }

    return (
        <Container>
            <RNCamera
                ref={(camera: RNCamera) => { setCamera(camera) }}
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                onBarCodeRead={barcodeRecognized}
            >

                <Mask />

                <ScanText>Escaneando...</ScanText>

            </RNCamera>

            <BackButton />

            <ScanTitleView>
                <ScanTitle>Escanear QR Code</ScanTitle>
            </ScanTitleView>

        </Container>
    )
}

export default QrScan