import React from 'react'
import { View } from 'react-native'

import { Container, ScanTitleView, ScanTitle } from './styles'
import BackButton from '../../components/BackButton'

export const QrScan: React.FC = () => {
    return (
        <Container>
            <BackButton />
            <ScanTitleView>
                <ScanTitle>Escanear QR Code</ScanTitle>
            </ScanTitleView>
        </Container>
    )
}

export default QrScan