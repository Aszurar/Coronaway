import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        width: width,
        height: height * 0.35,
        backgroundColor: '#00000090',
    },

    middle: {
        height: width * 0.7,

        display: 'flex',
        flexDirection: 'row',
    },

    middleRight: {
        width: width * 0.15,
        backgroundColor: '#00000090',
    },

    middleCenter: {
        width: width * 0.7,
    },

    squareBordersTop: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: width * 0.7 * 0.5,
    },

    squareBordersBottom: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: width * 0.7 * 0.5,
    },

    borderLeftTop: {
        width: width * 0.7 * 0.3,
        height: width * 0.7 * 0.3,

        borderColor: '#fff',
        borderLeftWidth: 2.5,
        borderTopWidth: 2.5,
    },

    borderRightTop: {
        width: width * 0.7 * 0.3,
        height: width * 0.7 * 0.3,

        borderColor: '#fff',
        borderRightWidth: 2.5,
        borderTopWidth: 2.5,
    },

    borderLeftBottom: {
        width: width * 0.7 * 0.3,
        height: width * 0.7 * 0.3,

        borderColor: '#fff',
        borderLeftWidth: 2.5,
        borderBottomWidth: 2.5,
    },

    borderRightBottom: {
        width: width * 0.7 * 0.3,
        height: width * 0.7 * 0.3,

        borderColor: '#fff',
        borderRightWidth: 2.5,
        borderBottomWidth: 2.5,
    },

    middleLeft: {
        width: width * 0.15,
        backgroundColor: '#00000090',
    },

    footer: {
        width: width,
        height: height * 0.4,
        backgroundColor: '#00000090',
    },
});

export default styles;