import React, { useState } from 'react'
import { View, TouchableWithoutFeedback, Text, Alert } from 'react-native'
import { BarCodeReadEvent, RNCamera } from 'react-native-camera';

import { Container, ScanTitleView, ScanTitle, ScanText, ButtonContainer } from './styles'
import { useNavigation } from '@react-navigation/native'
import Mask from '../../components/Mask';
import BackButton from '../../components/BackButton'
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { AxiosError } from 'axios';
import Button from '../../components/Button';
import { ExitStablishment } from '../CheckInConfirmation';


interface StablishmentProps {
    id: string,
    name: string
}

export const QrScan: React.FC = () => {
    const { user } = useAuth()
    const navigation = useNavigation()
    const [camera, setCamera] = useState<RNCamera>();
    const [isReading, setIsReading] = useState(false);
    const [stablishment, setStablishment] = useState<StablishmentProps>();

    async function getStablishment(idQr: string) {
        try {
            if (isReading) return
            setIsReading(true)

            const response = await api.patch(`/establishments/add/${idQr}`)
            setStablishment(response.data);
        } catch (error) {
            const err = error as AxiosError
            if (err.response) {
                console.log(err.response.status)
                console.log(err.response.data)
            }
        }
    }

    const barcodeRecognized = async ({ data }: BarCodeReadEvent) => {
        getStablishment(data)
        navigation.navigate('CheckInConfirmation', { stablishment })
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