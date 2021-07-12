import React from 'react'
import BackButton from '../../components/BackButton'
import { Container, TextContainer } from './styles'

export const Account: React.FC = ({ navigation }: any) => {
    return (
        <>
            <BackButton />
            <Container>
                <TextContainer>Em breve!
                </TextContainer>
            </Container>
        </>
    )
}

export default Account