import React from 'react'
import { View, Text } from 'react-native'
import BackButton from '../../components/BackButton'
import { Container, NameContainer, EmailContainer } from './styles'
import { useAuth } from '../../hooks/auth'

export const Account: React.FC = ({ navigation }: any) => {
    const { user } = useAuth()
    return (
        <>
            <BackButton />
            <Container>
                <NameContainer>{user.name}</NameContainer>
                <EmailContainer>{user.email}</EmailContainer>
            </Container>
        </>
    )
}

export default Account