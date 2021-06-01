import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';

export const Container = styled.View`
    flex: 1;
    display: flex;
    align-items: center;

    padding: 0 40px ${Platform.OS === 'android' ? '150' : '40'}px;
`;

export const ForgotPasswordText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    color: #fff;
    font-size: 24px;
    margin-top: ${Dimensions.get('window').height * 0.18}px;
    margin-bottom: 16px;
`;

export const InputContainer = styled.View`
    margin-bottom: 16px;
    width: 140%;
`;

export const ButtonContainer = styled.View`
    width: ${Dimensions.get('window').width * 0.40}px;
`;
