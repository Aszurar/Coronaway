import React from 'react'
import BackButton from '../../components/BackButton'
import {
    Container,
    Title,
    SubTitleContainer,
    SubTitle,
    CoronaIcone,
    TextContainer,
    NormalText,
    QrContainer,
    QrIcone,
    MarkerContainer,
    MarkerIcone,
    MenuContainer,
    SmallText,
    NormalTextContainer
} from './styles'
import FeatherIcon from 'react-native-vector-icons/Feather'
import CoronaIcon from '../../assets/corona.png'
import QrIcon from '../../assets/qrcode.png'
import MarkerIcon from '../../assets/pin.png'

export const Ajuda: React.FC = ({ navigation }: any) => {
    return (
        <>
            <BackButton />
            <Container>
                <Title>
                    Ajuda
                </Title>
                {/* <SubTitleContainer>
                    <CoronaIcone source={CoronaIcon} />
                    <SubTitle>Sou um Cliente:</SubTitle>
                </SubTitleContainer> */}
                <TextContainer>
                    <QrContainer>
                        <QrIcone source={QrIcon} />
                    </QrContainer>
                    <NormalText>
                        Clique neste ícone para fazer check-in em um estabelecimento usando o leitor de QR-CODE.
                    </NormalText>
                </TextContainer>
                <TextContainer>
                    <MarkerContainer>
                        <MarkerIcone source={MarkerIcon} />
                    </MarkerContainer>
                    <NormalText>
                        Clique neste marcador no mapa para visualizar informações sobre determinado estabelecimento.
                    </NormalText>
                </TextContainer>
                <TextContainer>
                    <MenuContainer>
                        <FeatherIcon name='menu' color='white' size={30} />
                    </MenuContainer>
                    <NormalText>
                        Clique neste ícone para abrir o menu de opções do usuário.
                    </NormalText>
                </TextContainer>
                <NormalTextContainer>
                    <SmallText>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ao fazer Check-in em um local,
                        você será encaminhado para a tela de confirmação. Ao sair do estabelecimento,
                        lembre-se de clicar no botão "Sair do local".
                    </SmallText>
                </NormalTextContainer>
                <SmallText>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Você pode ter acesso a informações dos estabelecimentos clicando no marcador no mapa,
                    que informa o nível de lotação do local como&nbsp;
                    <SmallText cor="green" >Baixo</SmallText>
                    <SmallText>, </SmallText>
                    <SmallText cor="yellow">Médio </SmallText>
                    <SmallText>ou </SmallText>
                    <SmallText cor="red">Cheio</SmallText>
                    <SmallText> e também possibilita abrir o GPS com rotas para o local.</SmallText>
                </SmallText>
            </Container>
        </>
    )
}

export default Ajuda