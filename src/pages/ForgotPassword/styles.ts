import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform, Dimensions } from 'react-native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    padding: 0 40px ${Platform.OS === 'android' ? '150' : '40'}px;
`;

export const PasswordText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    color: #fff;
    font-size: 24px;
    margin-top: ${Dimensions.get('window').height * 0.16}px;
    margin-bottom: 16px;
`;

export const PasswordTextContainer = styled.View`
    margin-top: ${Dimensions.get('window').height * 0.10}px;
`;

export const InputContainer = styled.View`
    margin-bottom: 16px;
    width: 100%;
`;

export const ButtonContainer = styled.View`
    width: 60%;
    margin: 0 auto;
`;

export const CreateAccountButton = styled.TouchableOpacity`
    margin-top: 20px;
`;
export const CreateAccountButtonText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-book';
    color: #fff;
    font-size: 20px;
    text-align: center;
    text-decoration: underline;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
    padding-bottom: ${16 + getBottomSpace()}px;
    justify-content: center;
    align-items: center;
`;

export const ForgotPasswordText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-book';
    color: #fff;
    font-size: 20px;
    text-align: center;
    text-decoration: underline;
`;
