import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: ${Dimensions.get('window').width * 0.08}px;
    bottom: ${Dimensions.get('window').height * 0.04}px;
    height: ${Dimensions.get('window').width * 0.15}px;
    width: ${Dimensions.get('window').width * 0.15}px;

    background-color: white;
    border-radius: ${Dimensions.get('window').height * 0.05}px;
`;

export const QrImage = styled.Image`
    /* flex: 1; */
    height: 44px;
    width: 44px;
    /* padding: 30px; */
`;