import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import BackButton from '../../components/BackButton'
import Check from '../../assets/Check.png'
import { Container, ConfirmationText, TextContainer, GreenText, CheckImg, ButtonContainer } from './styles'
import Button from '../../components/Button'

interface StablishmentProps {
    id: string,
    name: string
}

const CheckInConfirmation = ({ route }: any) => {
    const { data } = route.params
    const navigation = useNavigation()

    return (
        <Container>
            <BackButton />
            <TextContainer>
                <ConfirmationText>Check in realizado!</ConfirmationText>
                <CheckImg source={Check} />
                <ConfirmationText> Bem vindo à</ConfirmationText>
                <GreenText> {data.name}</GreenText>
            </TextContainer>
            <ButtonContainer>
                <Button
                    onPress={() => {
                        navigation.navigate('Map');
                    }}
                >
                    Voltar ao Início
                </Button>
            </ButtonContainer>
        </Container>
    )
}
export default CheckInConfirmation