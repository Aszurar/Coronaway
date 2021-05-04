import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
    flex: 1;
    display: flex;
    /* justify-content: center; */
    align-items: center;

    padding: 0 40px ${Platform.OS === 'android' ? '150' : '40'}px;
`;

export const TitleContainer = styled.View`
    margin-top: 20px
    flex-direction: row;
`;

export const ImageBg = styled.ImageBackground`   
    width: 130%;
    height: 90%;
    position: absolute;
    bottom: 12%;
`;

export const Title = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-bold';
    font-size: 50px;
    line-height: 173px;
    color: #f8f8f8;
    font-style: normal;
`;

export const TitleSpan = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-bold';
    color: #06bd58;
    font-size: 50px;
    line-height: 173px;
    font-style: normal;
`;

export const SignUpText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    color: #fff;
    font-size: 26px;
    margin: 210px 0 12px;
`;

export const ButtonContainer = styled.View`
    margin-bottom: 15px;
    width: 100%;
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
