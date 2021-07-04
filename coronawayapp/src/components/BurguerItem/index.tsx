import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, TextButton } from './styles';
import FeatherIcon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

interface ButtonProps extends RectButtonProperties {
    name: string;
    icon: string;
    page: string;
    logOff?: boolean;
}


const BurguerItem: React.FC<ButtonProps> = ({ name, icon, page, logOff }) => {
    const { signOut } = useAuth()
    const navigation = useNavigation()

    return (

        <Container onPress={
            !logOff ?
                () => navigation.navigate(page)
                :
                () => signOut()
        }>
            <FeatherIcon name={icon} color='white' size={22} />
            <TextButton>  {name}</TextButton>
        </Container>
    )
}

export default BurguerItem;
