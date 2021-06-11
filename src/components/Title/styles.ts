import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const TitleContainer = styled.View`
    /* flex: 1; */
    margin-top: ${Dimensions.get('window').height * 0.01}px;
    flex-direction: row;
    position: absolute;
    top: 0;
    align-items: center;
`;

export const FirstTitle = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-bold';

    font-size: ${Dimensions.get('window').width * 0.12}px;

    line-height: 173px;
    color: #f8f8f8;
    font-style: normal;
`;

export const SecondTitle = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-bold';
    color: #06bd58;

    font-size: ${Dimensions.get('window').width * 0.12}px;

    line-height: 173px;
    font-style: normal;
`;
