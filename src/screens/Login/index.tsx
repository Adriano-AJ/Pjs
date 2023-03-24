import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import {styles} from './styles';

export function Login(){
  return (

<View style={styles.container}>

    <View style={styles.containerBox}>
        <Text style={styles.textMain}>Entrar</Text>
        <Text style={styles.textLabel}>Email</Text>
        <TextInput style={styles.inputEntrada} secureTextEntry={true}/>
        <Text style={styles.textLabel}>Senha</Text>
        <TextInput style={styles.inputEntrada} secureTextEntry={true}/>
        <Text style={styles.textAlert}>Esqueceu a senha?</Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('SEXO na laje')}>
        <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.textFinal}> Não tem uma conta? cadastre-se. </Text>
    </View>

</View>)
}



