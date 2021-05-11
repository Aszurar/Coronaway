import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform, Dimensions } from 'react-native';

// export const Image = styled.ImageBackground`
//     width: 50%;
//     height: 50%;
//     justify-content: center;
//     align-items: center;
// `;

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 40px ${Platform.OS === 'android' ? '150' : '40'}px;
`;

export const TitleContainer = styled.View`
    margin-top: ${Dimensions.get('window').height * 0.05};
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
    margin-top: ${Dimensions.get('window').height * 0.16};
    margin-bottom: 16px;
`;

export const LoginContainer = styled.View``;

export const ButtonSpace = styled.View`
    margin-top: 16px;
`;
export const ButtonContainer = styled.View`
    width: 100%;
`;

export const CreateAccountButton = styled.TouchableOpacity`
    margin: 20px 0 32px;
`;
export const CreateAccountButtonText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-book';
    color: #fff;
    font-size: 20px;
    text-align: center;
    text-decoration: underline;
`;

export const GoBackToLogin = styled.TouchableOpacity`
    padding-bottom: ${16 + getBottomSpace()}px;

    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const GoBackToLoginText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-bold';
    color: #fff;
    text-align: center;
    margin-left: 8px;
    color: #06bd58;
    font-size: 18px;
    line-height: 18px;
    /* text-decoration: underline; */
`;
