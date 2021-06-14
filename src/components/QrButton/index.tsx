import React from 'react'
import { useNavigation } from '@react-navigation/native'

import QrImg from '../../assets/qrcode.png'
import { Container, QrImage } from './styles';

export const QrButton: React.FC = () => {
    const navigation = useNavigation()

    return (
        <Container onPress={() => navigation.navigate('QrScan')}>
            <QrImage source={QrImg} />
        </Container>
    );

}

export default QrButton
