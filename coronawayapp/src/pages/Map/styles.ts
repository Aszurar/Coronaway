import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';
import { LotacaoProps } from '.';

export const BurguerContainer = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;

    position: absolute;
    left: ${Dimensions.get('window').width * 0.01}px;
    top: ${Dimensions.get('window').height * 0.02}px;
    height: ${Dimensions.get('window').width * 0.15}px;
    width: ${Dimensions.get('window').width * 0.15}px;

    border-radius: ${Dimensions.get('window').height * 0.05}px;
`;

export const ModalContainer = styled.View`
    flex: 1;
    position: absolute;
    bottom: -${Dimensions.get('window').height * 0.06}px;;
    left: -${Dimensions.get('window').width * 0.05}px;
    border-radius: 30px;
    width: ${Dimensions.get('window').width}px;
    max-height: ${Dimensions.get('window').height * 0.4}px;
    padding: ${Dimensions.get('window').height * 0.03}px;
    align-items: center;

    background-color: #343C44;
`
export const NameText = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    color: #fff;
    font-size: 26px;
    text-align: center;
`
export const LotationText = styled.Text<LotacaoProps>`
    font-family: 'itc-avant-garde-gothic-std-demi';
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 18px;
    ${({ cor }) => cor == "Baixo" && css`color:  #06bd58`};
    ${({ cor }) => cor == "Moderado" && css`color: yellow`};
    ${({ cor }) => cor == "Cheio" && css`color: red`};
`;

export const ButtonContainer = styled.View`
    align-self: center;
    width: 80%;
    margin-bottom: 30px;
`;

export const ModalBurguerContainer = styled.View`
    flex: 1;
    position: absolute;
    left: -${Dimensions.get('window').width * 0.05}px;
    width: ${Dimensions.get('window').width * 0.65}px;
    height: ${Dimensions.get('window').height}px;
    padding: ${Dimensions.get('window').height * 0.03}px;
    align-items: center;

    background-color: #343C44;
`

export const TitleContainer = styled.View`
    margin-top: -${Dimensions.get('window').height * 0.08}px;
    flex-direction: row;
`;

export const FirstTitle = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-bold';

    font-size: ${Dimensions.get('window').width * 0.08}px;

    line-height: 173px;
    color: #f8f8f8;
    font-style: normal;
`;

export const SecondTitle = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-bold';
    color: #06bd58;

    font-size: ${Dimensions.get('window').width * 0.08}px;

    line-height: 173px;
    font-style: normal;
`;

export const BurguerLogOutContainer = styled.View`
    width: 100%;
    margin-bottom: 30px;
    position: absolute;
    bottom: 0;
`;

export const BurguerItemContainer = styled.View`
    flex: 1;
`