import { View, Text, Image} from 'react-native';
import {styles} from './styles';
import {img} from '../../assets/love.png'
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Welcome(){

    return(
        <View style={styles.container}>
           <Image style={styles.icon} source={require('./../../assets/love.png')}/>
           <Text style={styles.title}> Bem vindo </Text>
            
        </View>
    )
}