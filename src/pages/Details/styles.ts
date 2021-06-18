import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';

export const Container = styled.View`
    flex: 1;

    padding: 0 40px ${Platform.OS === 'android' ? '150' : '40'}px;
`;

export const NameText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    color: #fff;
    font-size: 26px;
    margin-top: ${Dimensions.get('window').height * 0.10}px;
    /* margin-bottom: ${Dimensions.get('window').height * 0.18}px; */
`;

export const LotationText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-book';
    color:  #06bd58;
    font-size: 18px;
    margin-top: ${Dimensions.get('window').height * 0.01}px;
    margin-bottom: ${Dimensions.get('window').height * 0.18}px;
`;

export const ButtonSpace = styled.View`
    margin-top: 16px;
`;
export const ButtonContainer = styled.View`
align-self: center;
    width: 80%;
    margin-bottom: 30px;
`;