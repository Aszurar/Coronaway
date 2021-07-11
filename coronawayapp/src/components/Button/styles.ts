import styled, { css } from 'styled-components/native';
import { Button, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonColor {
    cor?: string;
}

export const Container = styled(RectButton) <ButtonColor>`
    width: 100%;
    height: 50px;
    background-color: #06bd58;
    ${({ cor }) => cor == "red" && css`background-color:  #AF0900`};
    border-radius: ${Dimensions.get('window').width * 0.5}px;

    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    color: #ffffff;
    font-size: 24px;
    letter-spacing: ${Dimensions.get('window').width * 0.007}px;
`;
