import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';

export const Container = styled.SafeAreaView`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InputsContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    padding: 0 40px ${Platform.OS === 'android' ? '150' : '40'}px;
`;

export const TitleContainer = styled.View`
    /* margin-top: ${Dimensions.get('window').height * 0.05}; */
    flex-direction: row;
`;

export const Title = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-bold';

    font-size: ${Dimensions.get('window').width * 0.14}px;

    line-height: 173px;
    color: #f8f8f8;
    font-style: normal;
`;

export const TitleSpan = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-bold';
    color: #06bd58;

    font-size: ${Dimensions.get('window').width * 0.14}px;

    line-height: 173px;
    font-style: normal;
`;

export const SignUpUserContainer = styled.View`
    justify-content: center;
    align-items: center;

    margin-top: ${Dimensions.get('window').height * 0.25}px;
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

export const AddressView = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-bottom: 5px;
`

export const AddressText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-book';
    color: #fff;
    font-size: 20px;
`;

export const InputContainer = styled.View`
    margin-bottom: 16px;
    width: 100%;
`;

export const ButtonContainer = styled.View`
    margin-top: ${Dimensions.get('window').height * 0.05}px;
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
