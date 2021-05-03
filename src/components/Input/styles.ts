import FeatherIcon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

export const Container = styled.View`
    width: 100%;
    height: 48px;
    background-color: #f8f8f8;
    padding: 0 18px;
    border-radius: ${Dimensions.get('window').width * 0.5};
    margin-bottom: 10px;

    flex-direction: row;
    align-items: center;
`;

export const TextInput = styled.TextInput`
    flex: 1;
    font-family: 'itc-avant-garde-gothic-std-book';
    font-size: 16px;
    text-align: left;
    color: #000;
`;

export const Icon = styled(FeatherIcon)`
    margin-right: 16px;
`;
