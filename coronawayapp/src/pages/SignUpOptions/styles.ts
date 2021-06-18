import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform, Dimensions } from 'react-native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    padding: 0 40px ${Platform.OS === 'android' ? '150' : '40'}px;
`;

export const LoginText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    color: #fff;
    font-size: 24px;
    margin-top: ${Dimensions.get('window').height * 0.16};
    margin-bottom: 16px;
`;

export const LoginContainer = styled.View`
    margin-top: ${Dimensions.get('window').height * 0.1}px;
`;

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
