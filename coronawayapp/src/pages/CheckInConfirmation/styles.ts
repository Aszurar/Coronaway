import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex: 1;
`

export const TextContainer = styled.View`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
`
export const ConfirmationText = styled.Text`
    color: white;
    font-family: 'itc-avant-garde-gothic-std-demi';
    font-size: 24px;
`
export const GreenText = styled.Text`
    color: #06bd58;
    font-family: 'itc-avant-garde-gothic-std-demi';
    font-size: 24px;
    margin: 0 ${Dimensions.get('window').width * 0.05}px;
    text-align: center;
`
export const CheckImg = styled.Image`
    height: ${Dimensions.get('window').height * 0.35}px;
    width: ${Dimensions.get('window').width * 0.50}px;
`
export const ButtonContainer = styled.View`
    margin: 0 ${Dimensions.get('window').width * 0.1}px ${Dimensions.get('window').height * 0.10}px;
    /* flex: 1; */
    /* width: 100%; */
    /* justify-content: center; */
    /* align-items: center; */
`
export const ButtonContainerExit = styled.View`
    margin: -${Dimensions.get('window').width * 0.12}px ${Dimensions.get('window').width * 0.1}px ${Dimensions.get('window').height * 0.02}px;
`