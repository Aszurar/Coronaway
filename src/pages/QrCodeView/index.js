import React, { useEffect, useState, useCallback } from 'react';
import MapPicker from "react-native-map-picker";
import { View } from "react-native";
import GetLocation from 'react-native-get-location';

const SetLocation = () => {
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
        <View style={{ flex: 1 }}>
            {(latitude && longitude) &&
                <MapPicker
                    initialCoordinate={{
                        latitude,
                        longitude,
                    }}
                    onLocationSelect={({ latitude, longitude }) => console.log('Posição escolhida: ', latitude, longitude)}
                />
            }
        </View>
    );
    // }
}

export default SetLocation