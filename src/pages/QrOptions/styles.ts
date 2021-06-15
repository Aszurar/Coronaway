import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    padding: 0 40px ${Platform.OS === 'android' ? '150' : '40'}px;
`;

export const OptionsText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    color: #fff;
    font-size: 24px;
    margin-top: ${Dimensions.get('window').height * 0.16}px;
    margin-bottom: 16px;
`;

export const ButtonSpace = styled.View`
    margin-top: 16px;
`;
export const ButtonContainer = styled.View`
    width: 110%;
`;

export const CoronaContainer = styled.View`
    position: absolute;
    bottom: -${Dimensions.get('window').height * 0.22}px;
    align-self: center;

`

export const CoronaImg = styled.Image`
    width: ${Dimensions.get('window').width * 1.2}px;
    height: ${Dimensions.get('window').height * 0.45}px;
`
