
import './App.css';

import React,{useState} from 'react'
import { ChakraProvider, ColorModeScript, extendTheme,useColorMode } from '@chakra-ui/react';
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
