import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const NameContainer = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    font-size: 24px;
    color:  #06bd58;
    margin: 0 ${Dimensions.get('window').width * 0.1}px;
`
export const EmailContainer = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    font-size: 18px;
    color: white;
    margin: 0 ${Dimensions.get('window').width * 0.1}px;
`