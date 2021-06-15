import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import GetLocation from 'react-native-get-location';
import { useNavigation } from '@react-navigation/native';
import QrButton from '../../components/QrButton';

export const Map: React.FC = () => {
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
            />
            <QrButton />
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    map: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    }
})

export default Map