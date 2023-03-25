import { Home } from './src/screens/Home';
import { Login } from './src/screens/Login';
import { Cadastro } from './src/screens/Cadastro';
import { StatusBar } from 'expo-status-bar';
import { Routes } from '@routes/index';

export default function App(){
  return (
    <>
      <StatusBar backgroundColor="white"/>
      <Routes/>
    </>
  )
}
