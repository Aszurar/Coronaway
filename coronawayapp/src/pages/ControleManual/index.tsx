import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, SafeAreaView } from 'react-native';
import { Container, ButtonContainer, ButtonSpace, Title, CapacityText, CapacityColorText, CapacityContainer, OptionsText, CoronaContainer, CoronaImg } from './styles';

import Button from '../../components/Button';
import BackButton from '../../components/BackButton';
import Corona from '../../assets/corona.png'
import { ExitStablishment } from '../CheckInConfirmation';
import { useAuth } from '../../hooks/auth';
import { AxiosError } from 'axios';
import api from '../../services/api';
import { useState } from 'react';
import CoronaSpin from '../../components/CoronaSpin';


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
    async function getLotation(id: string) {
        try {
            const response = await api.get(`/establishments/${id}`)
            setLotacao(response.data.current_stocking)
        } catch (error) {
            const err = error as AxiosError
            if (err.response) {
                console.log(err.response.status)
                console.log(err.response.data)
            }
        }
    }

    const navigation = useNavigation();
    const [lotacao, setLotacao] = useState(Number)
    const [bool, setBool] = useState(false)
    const [time, setTime] = useState(false)

    const { user } = useAuth()

    setInterval(() => {
        setTime(!time)
    }, 10000);

    useEffect(() => {
        getLotation(user.id);
    }, [bool, time]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BackButton />
            <Container>
                <Title>{user.name}</Title>
                <CapacityContainer>
                    <CapacityText>
                        Lotação
                    </CapacityText>
                    <CapacityColorText>{lotacao}
                        <CapacityText> / </CapacityText>
                        {user.capacity}
                    </CapacityColorText>
                </CapacityContainer>
                <OptionsText>Selecione uma opção</OptionsText>

                <ButtonContainer>
                    <Button
                        onPress={() => {
                            addClient(user.id)
                            setBool(!bool)
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
                        setBool(!bool)
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
                <CoronaSpin />
            </CoronaContainer>
        </SafeAreaView>
    );
};

export default ControleManual;
