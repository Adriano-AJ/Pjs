import {styles} from './styles';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

export function Home(){
    return (
  
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image source={require("./../../assets/cerebro.png")} 
      style={styles.logo}
      />
    </View>
  
  <Text style={styles.text}> RECOVERY MOMENTS </Text>
  
  <TouchableOpacity
  style={styles.botao}>
  <Text style={styles.texto}>Login</Text>
  </TouchableOpacity>
  
  <TouchableOpacity
  style={styles.botao}>
  <Text style={styles.texto}>Cadastrar-se</Text>
  </TouchableOpacity>
  
  <Text style={styles.texten}> RM </Text>
  
  </View>
  
    )
  }