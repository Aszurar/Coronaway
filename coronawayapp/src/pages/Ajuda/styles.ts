import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

interface TextColor {
    cor?: string;
}


export const Container = styled.View`
    flex: 1;
    margin: ${Dimensions.get('window').height * 0.12}px ${Dimensions.get('window').height * 0.05}px;
`

export const Title = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    font-size: 28px;
    color:  white;
    margin: 0 ${Dimensions.get('window').width * 0.1}px ${Dimensions.get('window').height * 0.08}px;
    text-align: center;
`
export const SubTitleContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    /* margin-left: ${Dimensions.get('window').width * 0.08}px; */
`

export const SubTitle = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    font-size: 18px;
    color: #06bd58;
    margin: 0 ${Dimensions.get('window').width * 0.01}px ${Dimensions.get('window').height * 0.03}px;
`

export const CoronaIcone = styled.Image`
    height: 26px;
    width: 26px;
`

export const TextContainer = styled.View`
    margin: 0 ${Dimensions.get('window').width * 0.15}px ${Dimensions.get('window').height * 0.03}px 0;
    flex-direction: row;
`
export const QrContainer = styled.View`
    height: 48px;
    width: 48px;
    margin-right: 15px;

    background-color: white;
    border-radius: 80px;
    align-items: center;
    justify-content: center;
`

export const QrIcone = styled.Image`
    height: 34px;
    width: 34px;
`

export const NormalText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    font-size: 14px;
    color: white;
`

export const MarkerContainer = styled.View`
    height: 48px;
    width: 48px;
    margin-right: 15px;

    align-items: center;
    justify-content: center;
`

export const MarkerIcone = styled.Image`
    height: 50px;
    width: 32px;
`

export const MenuContainer = styled.View`
    height: 38px;
    width: 48px;
    margin-right: 15px;

    align-items: center;
    justify-content: center;
`
export const SmallText = styled.Text<TextColor>`
    font-family: 'itc-avant-garde-gothic-std-demi';
    font-size: 13px;
    text-align: justify;
    color: white;
    ${({ cor }) => cor == "green" && css`color:  #06bd58`};
    ${({ cor }) => cor == "yellow" && css`color: yellow`};
    ${({ cor }) => cor == "red" && css`color: red`};
`
export const NormalTextContainer = styled.View`
    margin-bottom: ${Dimensions.get('window').height * 0.03}px;
`