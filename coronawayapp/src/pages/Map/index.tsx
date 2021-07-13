import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Dimensions, Linking } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather'

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import GetLocation from 'react-native-get-location';
import { useNavigation } from '@react-navigation/native';

import QrButton from '../../components/QrButton';
import DropShadow from "react-native-drop-shadow";
import {
    BurguerContainer,
    ModalContainer,
    NameText,
    LotationText,
    ButtonContainer,
    ModalBurguerContainer,
    FirstTitle,
    SecondTitle,
    TitleContainer,
    BurguerLogOutContainer,
    BurguerItemContainer
} from './styles'

import Modal from 'react-native-modal';

//Marker
import { stablishments } from '../../users';
import marker_pin from '../../assets/pin.png';
import Button from '../../components/Button'
import BurguerItem from '../../components/BurguerItem'
import api from '../../services/api';
import { AxiosError } from 'axios';
import { useAuth } from '../../hooks/auth';
interface Establishment {
    name: string;
    current_stocking: number;
    capacity: number;
    latitude: string;
    longitude: string;
}

export const Map: React.FC = ({ navigation_drawer }: any) => {
    const navigation = useNavigation()

    const [latitude, setLatitude] = useState(Number);
    const [longitude, setLongitude] = useState(Number);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalBurguerVisible, setModalBurguerVisible] = useState(false);
    const [Nome, setNome] = useState(String);
    const [Lotacao, setLotacao] = useState('');
    const [Lat_Stablishment, setLat_Stablishment] = useState(String);
    const [Long_Stablishment, setLong_Stablishment] = useState(String);

    const [establishment, setEstablishment] = useState<Establishment[]>([]);


    async function getEstablishment() {
        try {
            const response = await api.get('/establishments')
            setEstablishment(response.data);
        } catch (error) {
            const err = error as AxiosError
            if (err.response) {
                console.log(err.response.status)
                console.log(err.response.data)
            }
        }
    }

    useEffect(() => {
        getEstablishment();

        const getLocation = () => {
            GetLocation.getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 15000,
            })
                .then(location => {
                    setLatitude(location.latitude);
                    setLongitude(location.longitude);
                })
                .catch(error => {
                    const { code, message } = error;
                    console.warn(code, message);
                });
        };
        getLocation();
    }, []);

    function toggleModal() {
        setModalVisible(!isModalVisible);
    }
    function toggleBurguerModal() {
        setModalBurguerVisible(!isModalBurguerVisible);
    }

    function CalculateLotation(current_stocking: number, capacity: number): string {
        const lotacaoCalculo = current_stocking / capacity

        if (lotacaoCalculo <= 0.30) return ("Baixo")
        else if (lotacaoCalculo > 0.30 && lotacaoCalculo <= 0.80) return ("Médio")
        else return ("Cheio")
    }

    function ShowMarkerModal({ name, current_stocking, latitude, longitude, capacity }: Establishment) {
        getEstablishment()
        toggleModal()
        setNome(name)
        setLotacao(CalculateLotation(current_stocking, capacity))
        setLat_Stablishment(latitude)
        setLong_Stablishment(longitude)
    };

    function handleOpenGoogleMapRoutes() {
        Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${Lat_Stablishment},${Long_Stablishment}`)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapView
                provider={PROVIDER_GOOGLE}
                region={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
                style={styles.map}
            >
                {
                    // useEffect
                    establishment.map(stablishment => (
                        <Marker
                            title={stablishment.name}
                            // description={Lotacao}
                            key={stablishment.name}
                            onCalloutPress={() => { ShowMarkerModal({ ...stablishment }) }}
                            coordinate={{
                                latitude: Number(stablishment.latitude),
                                longitude: Number(stablishment.longitude),
                            }}
                            image={marker_pin}
                        />
                    ))}
            </MapView>
            <Modal
                isVisible={isModalVisible}
                coverScreen={false}
                hasBackdrop={true}
                backdropOpacity={0.0}
                onBackButtonPress={toggleModal}
                onBackdropPress={toggleModal}
                deviceWidth={Dimensions.get('window').width}
            >
                <ModalContainer>
                    <NameText>{Nome}</NameText>
                    <LotationText cor={Lotacao}>{Lotacao}</LotationText>
                    <ButtonContainer>
                        <Button onPress={handleOpenGoogleMapRoutes}>ABRIR ROTAS</Button>
                    </ButtonContainer>
                </ModalContainer>
            </Modal>
            <BurguerContainer onPress={() => { toggleBurguerModal() }}>
                <DropShadow
                    style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0.9,
                            height: 0.9,
                        },
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                    }}
                >
                    <FeatherIcon name='menu' color='white' size={30} />
                </DropShadow>
            </BurguerContainer>
            <Modal
                isVisible={isModalBurguerVisible}
                coverScreen={false}
                hasBackdrop={true}
                backdropOpacity={0.0}
                onBackButtonPress={toggleBurguerModal}
                onBackdropPress={toggleBurguerModal}
                deviceWidth={Dimensions.get('window').width}
                animationIn={'fadeInLeft'}
                animationOut={'fadeOutLeft'}
                swipeDirection={'left'}
                onSwipeComplete={toggleBurguerModal}
            >
                <ModalBurguerContainer>
                    <TitleContainer>
                        <FirstTitle>Coron</FirstTitle>
                        <SecondTitle>Away</SecondTitle>
                    </TitleContainer>
                    <BurguerItemContainer>
                        <BurguerItem name="Conta" icon="user" page="Account" />
                        <BurguerItem name="Configurações" icon="settings" page="Configuracoes" />
                        <BurguerItem name="Emergência" icon="phone" telephone="192" />
                        <BurguerItem name="Denunciar" icon="alert-octagon" telephone="197" />
                        <BurguerItem name="Ajuda" icon="help-circle" page="Ajuda" />
                        <BurguerItem name="Sobre" icon="github" page="Sobre" />
                    </BurguerItemContainer>
                    <BurguerLogOutContainer>
                        <BurguerItem name="Sair" icon="log-out" page="SignIn" logOff />
                    </BurguerLogOutContainer>
                </ModalBurguerContainer>
            </Modal>
            <QrButton />
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    map: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
})

export default Map
