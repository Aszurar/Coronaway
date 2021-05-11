import FeatherIcon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

interface ContainerProps {
    isFocused: boolean;
}
export const Container = styled.View<ContainerProps>`
    width: 100%;
    height: 48px;
    background-color: #f8f8f8;
    padding: 0 18px;
    border-width: 2px;
    border-color: #f8f8f8;
    border-radius: ${Dimensions.get('window').width * 0.5};
    margin-bottom: 10px;

    flex-direction: row;
    align-items: center;

    ${props => props.isFocused && `border-color: #06bd58;`}
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
