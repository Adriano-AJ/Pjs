import { Home } from './src/screens/Home';
import { Login } from './src/screens/Login';
import { Welcome} from './src/screens/Welcome';
import { StatusBar } from 'expo-status-bar';
import { Routes } from '@routes/index';
import { NativeBaseProvider } from 'native-base';

export default function App(){
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="white"/>
      <Routes/>
    </NativeBaseProvider>
  )
}
