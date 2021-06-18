import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, StyleSheet, Dimensions, Image, Text } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather'

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import GetLocation from 'react-native-get-location';

import { useNavigation } from '@react-navigation/native';

import QrButton from '../../components/QrButton';
import DropShadow from "react-native-drop-shadow";
import { BurguerContainer } from './styles'

import SideBar from '../../components/SideBar';
import SignUp from '../../pages/SignUp';
import SignUpOptions from '../../pages/SignUpOptions';

//Marker
import { stablishments } from '../../users';
import marker_pin from '../../assets/pin.png';

export const Map: React.FC = ({ navigation_drawer }: any) => {
    const navigation = useNavigation()

    const [latitude, setLatitude] = useState(Number);
    const [longitude, setLongitude] = useState(Number);

    useEffect(() => {
        const getLocation = () => {
            GetLocation.getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 15000,
            })
                .then(location => {
                    // console.warn(location);
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
                {stablishments.map(stablishment => (
                    <Marker
                        title={stablishment.nome}
                        description={stablishment.lotacao}
                        style={styles.mapMarker}
                        key={stablishment.cnpj}
                        onCalloutPress={() => navigation.navigate('Details', { stablishment })}
                        coordinate={{
                            latitude: stablishment.latitude,
                            longitude: stablishment.longitude,
                        }}
                        image={marker_pin}
                    />
                ))}
            </MapView>
            <BurguerContainer onPress={() => { }}>
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