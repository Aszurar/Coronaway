import React from 'react';
import { Animated, Easing } from 'react-native'
import Corona from '../../assets/corona.png'

const CoronaSpin: React.FC = () => {
    let rotateValueHolder = new Animated.Value(0);

    const startImageRotateFunction = () => {
        rotateValueHolder.setValue(0);
        Animated.timing(rotateValueHolder, {
            toValue: 1,
            duration: 10000,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(() => startImageRotateFunction());
    };

    const RotateData = rotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    startImageRotateFunction()

    return (
        <Animated.Image
            style={{
                width: 500,
                height: 500,
                transform: [{ rotate: RotateData }],
            }}
            source={Corona}
        />
    )

}

export default CoronaSpin;
