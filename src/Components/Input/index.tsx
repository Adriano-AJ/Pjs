import { View, TextInput} from 'react-native'
import {Input as NativeBaseInput, IInputProps, FormControl} from 'native-base'

type Props = IInputProps & {
    errorMessage?: string|null
}

export function Input({errorMessage = null, isInvalid, ...res}: Props){

    const invalid = !!errorMessage || isInvalid;

    return(
        <FormControl alignItems="center"  isInvalid={invalid}>
            <NativeBaseInput
            flexGrow={1}
            backgroundColor="#ffffff"
            h={50}
            width={350}
            borderRadius={10}
            fontSize={'md'}
            marginBottom={5}
            {...res}
            />
            <FormControl.ErrorMessage alignSelf="flex-start" marginTop={-5} marginBottom={2}>
                {errorMessage}
            </FormControl.ErrorMessage>
        </FormControl>
    )
}