import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, SafeAreaView } from 'react-native';
import { Container, ButtonContainer, ButtonSpace, OptionsText, CoronaContainer, CoronaImg } from './styles';

import Button from '../../components/Button';
import BackButton from '../../components/BackButton';
import Corona from '../../assets/corona.png'
import { ExitStablishment } from '../CheckInConfirmation';
import { useAuth } from '../../hooks/auth';
import { AxiosError } from 'axios';
import api from '../../services/api';

async function addClient(id: string) {
    try {
        const response = await api.patch(`/establishments/add/${id}`)
    } catch (error) {
        const err = error as AxiosError
        if (err.response) {
            console.log(err.response.status)
            console.log(err.response.data)
        }
    }
}

const ControleManual: React.FC = () => {
    const navigation = useNavigation();
    const { user } = useAuth()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BackButton />
            <Container>
                <OptionsText>Selecione uma opção</OptionsText>

                <ButtonContainer>
                    <Button
                        onPress={() => {
                            addClient(user.id)
                            Alert.alert("Cliente Adicionado",
                                "Um cliente chegou ao estabelecimento.",
                                [
                                    {
                                        text: "Ok",
                                    }

                                ])
                        }}
                    >
                        Adicionar Cliente
                    </Button>
                    <ButtonSpace />
                    <Button color="red" onPress={() => {
                        ExitStablishment(user.id)
                        Alert.alert("Cliente Removido",
                            "Um cliente deixou o estabelecimento.",
                            [
                                {
                                    text: "Ok",
                                }

                            ])
                    }}>Remover Cliente</Button>

                </ButtonContainer>
            </Container>
            <CoronaContainer>
                <CoronaImg source={Corona} />
            </CoronaContainer>
        </SafeAreaView>
    );
};

export default ControleManual;
