import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import TextArea from './TextArea';
import Keyboard from './Keyboard';
import '../assets/style/style.css';


export default function App() {
  

  return (
    <>
      <Navbar />
      <main>
        <header>
          <code>Type anything using the virtual keyboard</code>
          <code>(or your own keyboard)</code>
        </header>
        <TextArea>
          <Keyboard />
        </TextArea>
      </main>
    </>
  )
}
