import styled from 'styled-components/native';
import { Dimensions, Platform } from 'react-native';

export const Container = styled.View`
    flex: 1;
    display: flex;
    align-items: center;

    padding: 0 40px ${Platform.OS === 'android' ? '150' : '40'}px;
`;

export const SignUpText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    color: #fff;
    font-size: 26px;
    margin: 180px 0 12px;
`;

export const ButtonContainer = styled.View`
    margin-bottom: 15px;
    width: ${Dimensions.get('window').width * 0.70}px;
`;
