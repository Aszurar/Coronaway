import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, TextButton } from './styles';
import FeatherIcon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';

interface ButtonProps extends RectButtonProperties {
    name: string;
    icon: string;
    page: string;
}

const BurguerItem: React.FC<ButtonProps> = ({ name, icon, page }) => {
    const navigation = useNavigation()

    return (

        <Container onPress={() => navigation.navigate(page)}>
            <FeatherIcon name={icon} color='white' size={22} />
            <TextButton>  {name}</TextButton>
        </Container>
    )
}

export default BurguerItem;
