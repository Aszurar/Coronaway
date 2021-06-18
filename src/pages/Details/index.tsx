import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, SafeAreaView, Linking } from "react-native";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";
import { ButtonContainer, Container, NameText, LotationText } from './styles';

const Details = ({ route }: any) => {
    const { stablishment } = route.params
    const navigation = useNavigation()

    function handleOpenGoogleMapRoutes() {
        Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${stablishment?.latitude},${stablishment?.longitude}`)
    }



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BackButton />
            <Container>
                <NameText>{stablishment.nome}</NameText>
                <LotationText>{stablishment.lotacao}</LotationText>
            </Container>
            <ButtonContainer>
                <Button onPress={handleOpenGoogleMapRoutes}>
                    ABRIR ROTAS
                </Button>
            </ButtonContainer>
        </SafeAreaView>
    )
}

export default Details