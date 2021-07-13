import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
`

export const QrText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    color: #fff;
    font-size: 24px;
    margin-bottom: 16px;
`

export const QrContainer = styled.View`
    margin: 0 40px;
    height: ${Dimensions.get('window').height * 0.38}px;
    width: ${Dimensions.get('window').width * 0.7}px;
`