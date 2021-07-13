import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const TextContainer = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    font-size: 30px;
    color:  #06bd58;
    margin: 0 ${Dimensions.get('window').width * 0.1}px;
    text-align: center;
`