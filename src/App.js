import logo from './logo.svg';
import './App.css';
import Sub from './components/Sub'
import React,{useState} from 'react'
import { ChakraProvider, ColorModeScript, extendTheme,useColorMode } from '@chakra-ui/react';
// import Person from './components/Person';
// import Counter from './components/Counter';
import NameInput from './components/NameInput';
import HookCounter from './components/HookCounter';
import ListsAndKeys from './components/ListsAndKeys';
import Form from './components/Form';
import FormFun from './components/FormFun';
import ValidationForm from './components/ValidationForm';
import Api from './components/Api';
import ApiFun from './ApiFun';

function App() {

  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode='light'/>
      <ApiFun/>
      
    </ChakraProvider>
  );
}

export default App;
