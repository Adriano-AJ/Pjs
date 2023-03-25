import {styles} from './styles'
import Icon from '@assets/previous.png'
import {Text, View, Image, TextInput, TouchableOpacity, Alert, StatusBar } from 'react-native';
import {useNavigation} from '@react-navigation/native'

export function ButtonBack(){
    const navigation = useNavigation()

    function handleGoBack(){
        navigation.goBack();
    }

    return(
        <TouchableOpacity 
        onPress={handleGoBack}
        style={styles.Button}>
            <Image style={styles.iconButton}source={Icon}/>
        </TouchableOpacity>
    )
}