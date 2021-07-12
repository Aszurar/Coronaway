import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const NameContainer = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    font-size: 18px;
    color:  white;
    margin: 0 ${Dimensions.get('window').width * 0.1}px ${Dimensions.get('window').height * 0.03}px;
    text-align: center;
`
export const DireitosContainer = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    font-size: 12px;
    color:  white;
    margin: 0 ${Dimensions.get('window').width * 0.1}px ${Dimensions.get('window').height * 0.03}px;
    text-align: center;
`
export const LogoContainer = styled.View`
    height: ${Dimensions.get('window').width * 0.6}px;
    width: ${Dimensions.get('window').width * 0.6}px;
    border-radius: 120px;
    background-color: white;
    align-items: center;
    justify-content: center;
    margin-bottom: ${Dimensions.get('window').height * 0.05}px;
`

export const CovidevsLogo = styled.Image`
    height: ${Dimensions.get('window').width * 0.4}px;
    width: ${Dimensions.get('window').width * 0.4}px;
`

export const TitleContainer = styled.View`
    margin:-${Dimensions.get('window').height * 0.07}px 0;
    flex-direction: row;
`;

export const FirstTitle = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-bold';
    font-size: ${Dimensions.get('window').width * 0.1}px;

    line-height: 173px;
    color: #f8f8f8;
    font-style: normal;
`;

export const SecondTitle = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-bold';
    color: #06bd58;

    font-size: ${Dimensions.get('window').width * 0.1}px;

    line-height: 173px;
    font-style: normal;
`;