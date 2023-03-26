import {Text, View, Image, TextInput, TouchableOpacity, Alert, Touchable, Button } from 'react-native';
import {styles} from './styles';
import { ButtonBack } from '../../Components/ButtonBack';
import {useNavigation} from '@react-navigation/native'


export function Login(){
  const navigation = useNavigation();

  function handleGoToCadastro(){
    navigation.navigate('cadastro')
  }
  return (

<View style={styles.container}>
    <View style={styles.containerBox}>
    <ButtonBack
    ></ButtonBack>
        <Text style={styles.textMain}>Entrar</Text>

        <Text style={styles.textLabel}>Email</Text>

        <TextInput style={styles.inputEntrada} secureTextEntry={false}/>

        <Text style={styles.textLabel}>Senha</Text>

        <TextInput style={styles.inputEntrada} secureTextEntry={true}/>

        <Text style={styles.textAlert}>Esqueceu a senha?</Text>

        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('SEXO na laje')}>
        <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleGoToCadastro}>
          <Text style={styles.textFinal}> Não tem uma conta? cadastre-se. </Text>
        </TouchableOpacity>
    </View>

</View>)
}



