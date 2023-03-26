import {Text, View, Image, TextInput, TouchableOpacity, Alert, StatusBar } from 'react-native';
import {styles} from './styles';
import { ButtonBack } from '../../Components/ButtonBack';
import {useState} from 'react'
import {useForm, Controller} from 'react-hook-form';
import { Input } from './../../Components/Input';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

type FormDataProps = {
    name: string,
    email: string, 
    password: string,
    confpassw: string;
}

const signUpSchema = yup.object({
    name: yup.string().required('Informe o nome'),
    email: yup.string().required('Informe o email').email('E-mail inválido'),
    password: yup.string().required('Informe a senha').min(6, 'a senha deve ter no minimo 6 digitos.'),
    confpassw: yup.string().required('Confirme a senha').oneOf([yup.ref('password')], 'A confirmação da senha não confere.')
})


export function Cadastro(){

    const {control, handleSubmit, formState:{errors}} = useForm<FormDataProps>({
        resolver: yupResolver(signUpSchema)
    })

    function handleCadastro({name, email, password, confpassw}: FormDataProps){
        console.log(name, email, password, confpassw)
    }
    return (
    
    <View style={styles.container}>
        
        
            <View style={styles.header}>
                <ButtonBack></ButtonBack>
            </View>
            <Image 
                source={require("./../../assets/cerebro.png")} 
                style={styles.logo}
                />

            <View style={styles.formInput}>
                <Text style={styles.textMain}>
                    Criar conta
                </Text>
                <Controller
                    control={control}
                    name = "name"
                    render={({field: {onChange, value}}) =>
                            <Input 
                            placeholder="Nome" 
                            secureTextEntry={false}
                            onChangeText={onChange}
                            value={value}
                            errorMessage={errors.name?.message}
                            
                            />
                    
                    }
                />
                <Controller
                    control={control}
                    name="email"
                    render={({field: {onChange, value}}) =>
                            <Input 
                            placeholder="Email" 
                            keyboardType='email-address'
                            secureTextEntry={false}
                            onChangeText={onChange}
                            value={value}
                            errorMessage={errors.email?.message}
                            />
                    
                    }
                />
                
                <Controller
                    control={control}
                    name="password"
                    render={({field: {onChange, value}}) =>
                            <Input 
                            placeholder="Senha" 
                            secureTextEntry={true}
                            onChangeText={onChange}
                            value={value}
                            errorMessage={errors.password?.message}
                            />
                        
                    }
                />
                <Controller
                    control={control}
                    name="confpassw"
                    render={({field: {onChange, value}}) =>
                        <View style={styles.formInput}>
                            <Input 
                            placeholder="Confirmar senha" 
                            secureTextEntry={true}
                            onChangeText={onChange}
                            value={value}
                            errorMessage={errors.confpassw?.message}
                            />
                        </View>
                    }
                />
            </View>
            <TouchableOpacity 
            style={styles.button} 
            onPress={handleSubmit(handleCadastro)}
            >
                <Text style={styles.textButton}>
                    Registrar
                </Text>
            </TouchableOpacity>

            <Text style={styles.textFinal}> 
                Não tem uma conta? cadastre-se. 
            </Text>

        

    </View>)
}