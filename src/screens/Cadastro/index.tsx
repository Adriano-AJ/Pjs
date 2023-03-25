import {Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import {styles} from './styles';

export function Cadastro(){
  return (

<View style={styles.container}>

    <View style={styles.containerBox}>

        <Image 
        source={require("../../../assets/cerebro.png")} 
        style={styles.logo}
        />

        <Text style={styles.textMain}>
            Criar conta
        </Text>
        <View style={styles.formInput}>
            <TextInput placeholder="Email" style={styles.inputEntrada} secureTextEntry={false}/>
        </View>

        <View style={styles.formInput}>
            <TextInput placeholder="Senha" style={styles.inputEntrada} secureTextEntry={true}/>
            <TouchableOpacity onPress={() => Alert.alert('Em processo de criação')}>
                <Image source={require("../../../assets/hide.png")} 
                style={styles.imgButton}
                />
            </TouchableOpacity>
        </View>

        <View style={styles.formInput}>
            <TextInput placeholder="Confimar senha" style={styles.inputEntrada} secureTextEntry={true}/>
            <TouchableOpacity onPress={() => Alert.alert('Em processo de criação')}>
                <Image source={require("../../../assets/hide.png")} 
                style={styles.imgButton}
                />
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('SEXO na laje')}>
            <Text style={styles.textButton}>
                Registrar
            </Text>
        </TouchableOpacity>

        <Text style={styles.textFinal}> 
            Não tem uma conta? cadastre-se. 
        </Text>

    </View>

</View>)
}