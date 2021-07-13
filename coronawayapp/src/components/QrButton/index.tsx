import React from 'react'
import { useNavigation } from '@react-navigation/native'

import QrImg from '../../assets/qrcode.png'
import { Container, QrImage } from './styles';
import { useAuth } from '../../hooks/auth';

export const QrButton: React.FC = () => {
    const navigation = useNavigation()
    const { user } = useAuth()

    return (
        <Container onPress={user.cnpj ? () => navigation.navigate('QrOptions') : () => navigation.navigate('QrScan')}>
            <QrImage source={QrImg} />
        </Container>
    );

}

export default QrButton
