import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';

export const Container = styled.View`
    flex: 1;
    display: flex;
    align-items: center;

    padding: 0 40px ${Platform.OS === 'android' ? '150' : '40'}px;
`;

export const LoginText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    color: #fff;
    font-size: 24px;
    margin-top: ${Dimensions.get('window').height * 0.21}px;
    margin-bottom: 16px;
`;

export const InputContainer = styled.View`
    margin-bottom: 16px;
    width: 120%;
`;

export const ButtonContainer = styled.View`
    width: ${Dimensions.get('window').width * 0.40}px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
    margin: 20px 0 2px;
`;

export const CreateAccountButtonText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-book';
    color: #fff;
    font-size: ${Dimensions.get('window').width * 0.04}px;
    text-align: center;
    text-decoration: underline;
`;

export const ForgotPassword = styled.TouchableOpacity``;

export const ForgotPasswordText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-book';
    color: #fff;
    font-size: ${Dimensions.get('window').width * 0.04}px;
    text-align: center;
    text-decoration: underline;
`;