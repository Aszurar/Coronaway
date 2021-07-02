import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
  
    /* margin-left: -${Dimensions.get('window').width * 0.2}px; */
    flex-direction: row;
    align-items: center;
    margin-bottom: ${Dimensions.get('window').height * 0.007}px;
`;

export const TextButton = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    color: #ffffff;
    font-size: 22px;
`;
