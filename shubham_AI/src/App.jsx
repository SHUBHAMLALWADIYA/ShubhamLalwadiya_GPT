import { useState } from 'react'
import './App.css'
import runChat from './config/gemini'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import ErrorBoundary from './components/ErrorBoundary';
import { ChakraProvider } from '@chakra-ui/react';

function App() {

  return (
    <>
    <ChakraProvider>
      <Sidebar/>
      <Main/>

    </ChakraProvider>

      
    </>
  )
}

export default App
