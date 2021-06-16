import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const BurguerContainer = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;

    position: absolute;
    left: ${Dimensions.get('window').width * 0.01}px;
    top: ${Dimensions.get('window').height * 0.02}px;
    height: ${Dimensions.get('window').width * 0.15}px;
    width: ${Dimensions.get('window').width * 0.15}px;

    /* background-color: white; */
    border-radius: ${Dimensions.get('window').height * 0.05}px;
`;

// export const QrImage = styled.Image`
//     /* flex: 1; */
//     height: 44px;
//     width: 44px;
//     /* padding: 30px; */
// `;