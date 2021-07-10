import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, SafeAreaView } from 'react-native';
import { Container, ButtonContainer, ButtonSpace, OptionsText } from './styles';

import Button from '../../components/Button';
import BackButton from '../../components/BackButton';
import Corona from '../../assets/corona.png'
import { ExitStablishment } from '../CheckInConfirmation';
import { useAuth } from '../../hooks/auth';

const ControleManual: React.FC = () => {
    const navigation = useNavigation();
    const { user } = useAuth()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BackButton />
            <Container>
                <OptionsText>Selecione uma opção</OptionsText>

                <ButtonContainer>
                    <Button onPress={() => {
                        ExitStablishment(user.id)
                        Alert.alert("Cliente Removido",
                            "Um cliente deixou o estabelecimento.",
                            [
                                {
                                    text: "Ok",
                                }

                            ])
                    }}>Remover cliente</Button>

                    <ButtonSpace />
                    <Button
                        onPress={() => {
                            navigation.navigate('QrCodeView');
                        }}
                    >
                        Visualizar QR Code
                    </Button>
                </ButtonContainer>
            </Container>
            <CoronaContainer>
                <CoronaImg source={Corona} />
            </CoronaContainer>
        </SafeAreaView>
    );
};

export default ControleManual;
