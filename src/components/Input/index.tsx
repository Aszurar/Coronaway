import React, {
    useState,
    useCallback,
    useRef,
    useImperativeHandle,
    forwardRef,
} from 'react';
import { TextInputProps } from 'react-native';
import { Container, TextInput, Icon } from './styles';

interface InputValueReference {
    value: string;
}
interface InputProps extends TextInputProps {
    name: string;
    icon: string;
}

// inteface da ref passwordInputRef da página SignIn para podermos recebe-la aqui
// definimos somente como propriedade dela os métodos que serão usados nela, nesse caso
// somente é o método de focus para podermos focar no próximo Input quando for apertado o Next.
interface InputRef {
    focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
    { name, icon, ...rest },
    ref,
) => {
    // responsável por atualizar o valor do input de acordo com o que o usuário digita.
    const inputValueRef = useRef<InputValueReference>({ value: '' });

    // responsável por referenciar o nosso TextInput que seria o Input em si
    // para podermos manipula-lo diretamente
    const inputElementRef = useRef<any>(null);

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

    // Não podemos enviar a ref que vem da página de SignIn ou outra página direto para o Input no TextInput pois já esta sendo
    // usado uma ref nele, então temos que passar dessa forma que é bem específica e usada somente em alguns momentos específicos.
    // Assim essa ref receberá esse metodo focus que focalizará o próximo Input
    useImperativeHandle(ref, () => ({
        focus() {
            inputElementRef.current.focus();
        },
    }));

    return (
        <Container isFocused={isFocused}>
            <Icon
                name={icon}
                size={20}
                color={isFocused || isFilled ? '#06bd58' : '#666360'}
            />
            <TextInput
                ref={inputElementRef}
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

// É necessário passar esse forwardRef para que possamos habilitar
// o botão next para passar para o próximo input
export default forwardRef(Input);
