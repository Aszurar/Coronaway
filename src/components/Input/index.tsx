import React, { useState, useCallback, useRef } from 'react';
import { TextInputProps } from 'react-native';
import { Container, TextInput, Icon } from './styles';

interface InputValueReference {
    value: string;
}
interface InputProps extends TextInputProps {
    name: string;
    icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
    const inputValueRef = useRef<InputValueReference>({ value: '' });
    // responsável por atualizar o valor do input de acordo com o que o usuário digita.

    // responsável pelas estilizações dos inputs se está focado ou preenchido para colori-lo.
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    // responsável por verificar se o input foi ou não preenchido para trocar a cor do ícone.
    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        if (inputValueRef.current.value) {
            setIsFilled(true);
        } else {
            setIsFilled(false);
        }
    }, []);

    return (
        <Container isFocused={isFocused}>
            <Icon
                name={icon}
                size={20}
                color={isFocused || isFilled ? '#06bd58' : '#666360'}
            />
            <TextInput
                placeholderTextColor="#666360"
                onChangeText={value => {
                    inputValueRef.current.value = value;
                }}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                {...rest}
            />
        </Container>
    );
};

export default Input;
