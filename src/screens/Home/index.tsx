import {styles} from './styles';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native'

export function Home(){

  const navigation = useNavigation();

  function handleLogin(){
    navigation.navigate('login')
  }
  function handleCadastro(){
    navigation.navigate('cadastro')
  }
    return (
  
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image source={require("./../../assets/cerebro.png")} 
      style={styles.logo}
      />
    </View>
  
  <Text style={styles.text}> RECOVERY MOMENTS </Text>
  
  <TouchableOpacity
  onPress={handleLogin}
  style={styles.botao}>
  <Text style={styles.texto}>Login</Text>
  </TouchableOpacity>
  
  <TouchableOpacity
  onPress={handleCadastro}
  style={styles.botao}>
  <Text style={styles.texto}>Cadastrar-se</Text>
  </TouchableOpacity>
  
  <Text style={styles.texten}> RM </Text>
  
  </View>
  
    )
  }