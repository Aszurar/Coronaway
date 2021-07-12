import React from 'react'
import BackButton from '../../components/BackButton'
import { Container, NameContainer, CovidevsLogo, LogoContainer, TitleContainer, FirstTitle, SecondTitle, DireitosContainer } from './styles'

import Logo from '../../assets/covidevs.png'
import CoronaSpin from '../../components/CoronaSpin'

export const Sobre: React.FC = ({ navigation }: any) => {
    return (
        <>
            <BackButton />
            <Container>
                <TitleContainer>
                    <FirstTitle>Coron</FirstTitle>
                    <SecondTitle>Away</SecondTitle>
                </TitleContainer>
                <NameContainer>Um Aplicativo da</NameContainer>
                {/* <LogoContainer> */}
                <CoronaSpin />
                <CovidevsLogo source={Logo} />

                {/* </LogoContainer> */}
                <NameContainer>2021 - UFPB</NameContainer>
                <DireitosContainer>© Todos os direitos reservados.</DireitosContainer>
            </Container>
        </>
    )
}

export default Sobre