import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';

export const Container = styled.View`
    flex: 1;
    display: flex;
    /* justify-content: center; */
    align-items: center;

    padding: 0 40px ${Platform.OS === 'android' ? '150' : '40'}px;
`;

export const SignUpUserText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    color: #fff;
    font-size: 24px;
    width: 100%;
   
    margin-bottom: 16px;
`;

export const SignUpEstablishmentText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    color: #fff;
    font-size: 24px;
    margin-bottom: 16px;
    text-align: center;
`;

export const InputContainer = styled.View`
    margin-bottom: 16px;
    width: ${Dimensions.get('window').width * 0.8}px;
`;

export const ButtonContainer = styled.View`
    width: ${Dimensions.get('window').width * 0.8}px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
    margin: 20px 0 2px;
`;

export const CreateAccountButtonText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-book';
    color: #fff;
    font-size: 20px;
    text-align: center;
    text-decoration: underline;
`;

export const ForgotPassword = styled.TouchableOpacity``;

export const ForgotPasswordText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-book';
    color: #fff;
    font-size: 20px;
    text-align: center;
    text-decoration: underline;
`;
