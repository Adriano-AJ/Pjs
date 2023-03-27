import {Text, View, Image, TextInput, TouchableOpacity, Alert, Touchable, Button } from 'react-native';
import {styles} from './styles';
import { ButtonBack } from '../../Components/ButtonBack';
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react'

export function Login(){
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleGoToCadastro(){
    navigation.navigate('cadastro')
  }

  const handleLogin = async () => {
    if(email =='' || password==''){
      Alert.alert('Campos Obrigatórios', 'Preencha o email ou a senha')
    }
    else{
      const emailUser = await AsyncStorage.getItem('@asyncStorage:emailUser')
      const passwordUser = await AsyncStorage.getItem('@asyncStorage:passwordUser')
      if(emailUser == email && passwordUser == password){
        Alert.alert('Sucesso', 'Usuário logado')
        navigation.navigate('welcome')
      }
      else{
        Alert.alert('Erro', 'Usuário incorreto')
      }
    }
  }
  return (

<View style={styles.container}>
    <View style={styles.containerBox}>
    <ButtonBack
    ></ButtonBack>
        <Text style={styles.textMain}>Entrar</Text>

        <Text style={styles.textLabel}>Email</Text>

        <TextInput 
        style={styles.inputEntrada} 
        onChangeText={setEmail}
        secureTextEntry={false}
        />

        <Text style={styles.textLabel}>Senha</Text>

        <TextInput 
        style={styles.inputEntrada} 
        onChangeText={setPassword}
        secureTextEntry={true}/>

        <Text style={styles.textAlert}>Esqueceu a senha?</Text>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleGoToCadastro}>
          <Text style={styles.textFinal}> Não tem uma conta? cadastre-se. </Text>
        </TouchableOpacity>
    </View>

</View>)
}



