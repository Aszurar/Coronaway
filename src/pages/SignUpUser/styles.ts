import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';

export const KeyboardAV = styled.KeyboardAvoidingView`
    flex:1;
`;

export const Container = styled.View`
    flex: 1;
    display: flex;
    /* justify-content: center; */
    align-items: center;

    padding: 0 40px ${Platform.OS === 'android' ? '150' : '40'}px;
`;

export const TitleContainer = styled.View`
    margin-top: 20px;
    flex-direction: row;
`;

export const Title = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-bold';

    font-size: ${Dimensions.get('window').width * 0.11};

    line-height: 173px;
    color: #f8f8f8;
    font-style: normal;
`;

export const TitleSpan = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-bold';
    color: #06bd58;

    font-size: ${Dimensions.get('window').width * 0.11};

    line-height: 173px;
    font-style: normal;
`;

export const SignUpUserText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    color: #fff;
    font-size: 24px;
    margin-top: ${Dimensions.get('window').height * 0.08};
    margin-bottom: 16px;
`;

export const SignUpEstablishmentText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    color: #fff;
    font-size: 24px;
    /* width: 100%; */
    margin-top: ${Dimensions.get('window').height * 0.03};
    margin-bottom: 16px;
    text-align: center;
`;

export const ImageBg = styled.ImageBackground`   
    flex:1;
    display:flex;

    width: 100%;
    height: 70%;
    position: absolute;
    bottom: 15%;
`;

export const InputContainer = styled.View`
    margin-bottom: 16px;
    width: 100%;
`;

export const ButtonContainer = styled.View`
    width: 80%;
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
