import React, { useState } from 'react'
import { View, TouchableWithoutFeedback, Text, Alert } from 'react-native'
import { BarCodeReadEvent, RNCamera } from 'react-native-camera';

import { Container, ScanTitleView, ScanTitle, ScanText } from './styles'
import { useNavigation } from '@react-navigation/native'
import Mask from '../../components/Mask';
import BackButton from '../../components/BackButton'
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { AxiosError } from 'axios';
const { tokenAuth } = useAuth()

interface StablishmentProps {
    id: string,
    name: string
}

export const QrScan: React.FC = () => {
    const navigation = useNavigation()
    const [camera, setCamera] = useState<RNCamera>();
    const [stablishment, setStablishment] = useState<StablishmentProps>();

    async function getStablishment(id: string) {
        try {
            const response = await api.get(`/establishments/${id}`, {
                headers: {
                    Authorization: `Bearer ${tokenAuth}`
                }
            })
            setStablishment(response.data);
        } catch (error) {
            const err = error as AxiosError
            if (err.response) {
                console.log(err.response.status)
                console.log(err.response.data)
            }
        }
    }
    // const barcodeRecognized = ({ data }: BarCodeReadEvent) => {
    //     console.log('data: ', data)
    //     navigation.navigate('CheckInConfirmation', { data })
    // }

    const barcodeRecognized = async ({ data }: BarCodeReadEvent) => {
        // await getStablishment(data)
        console.log('data: ', data)
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