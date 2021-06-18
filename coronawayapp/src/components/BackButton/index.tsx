import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon } from './styles';

const BackButton: React.FC = () => {
    const navigation = useNavigation();
    return (
        <>
            <Button onPress={() => navigation.goBack()}>
                <Icon name="arrow-left-circle" />
            </Button>
        </>
    );
};

export default BackButton;
