import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, Dimensions } from "react-native";
import MapPicker from "react-native-map-picker";
import GetLocation from 'react-native-get-location';

const SetLocation = ({ getLocation }) => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    const LoadPosition = useCallback(async () => {
        const location = await GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        setLatitude(location.latitude)
        setLongitude(location.longitude)
    }, [])

    useEffect(() => {
        LoadPosition();
    }, [LoadPosition])

    return (
        <View style={styles.container}>
            {(latitude && longitude) &&
                <MapPicker
                    initialCoordinate={{
                        latitude,
                        longitude,
                    }}
                    onLocationSelect={({ latitude, longitude }) => getLocation(latitude, longitude)}

                />
            }
        </View>
    );
}

export default SetLocation

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        marginBottom: 15,
        height: Dimensions.get('window').height * 0.5,
    },
})