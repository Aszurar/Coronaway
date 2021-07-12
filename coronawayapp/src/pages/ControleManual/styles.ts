import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    padding: 0 40px ${Platform.OS === 'android' ? '150' : '40'}px;
`;

export const Title = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    color: #06bd58;
    font-size: 26px;
    margin-top: -${Dimensions.get('window').height * 0.1}px;
    margin-bottom: ${Dimensions.get('window').height * 0.06}px;
`;

export const CapacityContainer = styled.View`
    align-items: center;
`

export const CapacityText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    color: #fff;
    font-size: 28px;
    margin-top: ${Dimensions.get('window').height * 0.04}px;
    /* margin-bottom: 16px; */
`;

export const CapacityColorText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    color: #06bd58;
    font-size: 28px;
`;

export const OptionsText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    color: #fff;
    font-size: 24px;
    margin-top: ${Dimensions.get('window').height * 0.04}px;
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
    bottom: -${Dimensions.get('window').height * 0.3}px;
    align-self: center;

`

export const CoronaImg = styled.Image`
    width: ${Dimensions.get('window').width * 1.2}px;
    height: ${Dimensions.get('window').height * 0.45}px;
`