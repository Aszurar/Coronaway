import React from 'react';
import { View, SafeAreaView } from 'react-native';
import styles from './styles';

const Mask = (): JSX.Element => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header} />
            <View style={styles.middle}>
                <View style={styles.middleRight} />
                <View style={styles.middleCenter}>
                    <View style={styles.squareBordersTop}>
                        <View style={styles.borderLeftTop} />
                        <View style={styles.borderRightTop} />
                    </View>
                    <View style={styles.squareBordersBottom}>
                        <View style={styles.borderLeftBottom} />
                        <View style={styles.borderRightBottom} />
                    </View>
                </View>
                <View style={styles.middleLeft} />
            </View>
            <View style={styles.footer} />
        </SafeAreaView>
    );
};

export default Mask;