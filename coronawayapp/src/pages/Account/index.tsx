import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Gravatar, GravatarApi } from 'react-native-gravatar';
import BackButton from '../../components/BackButton'
import { Container, NameContainer, EmailContainer } from './styles'
import { useAuth } from '../../hooks/auth'

export const Account: React.FC = ({ navigation }: any) => {
    const { user } = useAuth()
    return (
        <>
            <BackButton />
            <Container>
                <Gravatar options={{
                    email: user.email,
                    parameters: { "size": "200", "d": "mm" },
                    secure: true
                }}
                    style={styles.roundedProfileImage} />
                <NameContainer>{user.name}</NameContainer>
                <EmailContainer>{user.email}</EmailContainer>
            </Container>
        </>
    )
}

export default Account

const styles = StyleSheet.create({
    roundedProfileImage: {
        width: 150, height: 150, borderWidth: 2,
        borderColor: '#06bd58', borderRadius: 80,
        marginBottom: 26, marginTop: -50,
    }
})