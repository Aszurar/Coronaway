import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex: 1;
`
export const ScanTitleView = styled.View`
    flex: 1;
    align-items: center;
`

export const ScanTitle = styled.Text`
    margin-top: ${Dimensions.get('window').height * 0.1}px;

    font-family: 'itc-avant-garde-gothic-std-demi';
    color: #ffffff;
    font-size: 24px;
`
