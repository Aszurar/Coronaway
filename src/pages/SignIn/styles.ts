import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';

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

export const Title = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-bold';
    font-size: ${Dimensions.get('window').width * 0.14};
    line-height: 173px;
    color: #f8f8f8;
    font-style: normal;
`;

export const TitleSpan = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-bold';
    color: #06bd58;
    font-size: ${Dimensions.get('window').width * 0.14};
    line-height: 173px;
    font-style: normal;
`;

export const LoginText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    color: #fff;
    font-size: 24px;
    margin-top: ${Dimensions.get('window').height * 0.21};
    margin-bottom: 16px;
`;

export const InputContainer = styled.View`
    margin-bottom: 16px;
    width: 100%;
`;

export const ButtonContainer = styled.View`
    width: 60%;
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
