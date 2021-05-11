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

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

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
