import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Login} from '../screens/Login'
import {Home} from '../screens/Home'
import {Cadastro} from '../screens/Cadastro'
import { Welcome } from "../screens/Welcome";

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){ 
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="login"
                component={Login}
            />
            <Screen
                name="cadastro"
                component={Cadastro}
            />
            <Screen
                name="welcome"
                component={Welcome}
            />
        </Navigator>
    )
}