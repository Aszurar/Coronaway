import React from 'react'
import { useNavigation } from '@react-navigation/native'

import BackButton from '../../components/BackButton'
import Check from '../../assets/Check.png'
import { Container, ConfirmationText, TextContainer, GreenText, CheckImg, ButtonContainer, ButtonContainerExit } from './styles'
import Button from '../../components/Button'
import { AxiosError } from 'axios'
import api from '../../services/api'

interface StablishmentProps {
    id: string,
    name: string
}

export async function ExitStablishment(idQr: string) {
    try {
        const response = await api.patch(`/establishments/sub/${idQr}`)
    } catch (error) {
        const err = error as AxiosError
        if (err.response) {
            console.log(err.response.status)
            console.log(err.response.data)
        }
    }
}

const CheckInConfirmation = ({ route }: any) => {
    const { stablishment } = route.params
    const navigation = useNavigation()

    return (
        <Container>
            <BackButton />
            <TextContainer>
                <ConfirmationText>Check in realizado!</ConfirmationText>
                <CheckImg source={Check} />
                <ConfirmationText> Bem vindo à</ConfirmationText>
                <GreenText> {stablishment?.name}</GreenText>
            </TextContainer>
            <ButtonContainerExit>
                <Button
                    color="red"
                    onPress={() => {
                        ExitStablishment(stablishment?.id)
                        navigation.navigate('Map');
                    }}
                >
                    Sair do local
                </Button>
            </ButtonContainerExit>
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