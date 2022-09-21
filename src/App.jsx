<<<<<<< HEAD
import Container from "./components/Container";


const App = () => <Container />;

export default App;
=======
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './assets/style/style.css';
import { render } from '@testing-library/react';

export default function App() {
  const [text, addText] = useState('');
  const [uppercase, toggleCaps] = useState(false);
  const [capslock, toggleCapslock] = useState(false);

  const characters = `1234567890-= qwertyuiop[] asdfghjkl;' zxcvbnm,./`;
  const characterGroup = characters.split(' ');
  let rows = [, , ,];
  const backspaceElement = 
  <>
    <button className='key backspace-key' onClick={() => addText(text.slice(0, -1))}><i className="fa-solid fa-arrow-left-long"></i></button>
  </>;
  const spacebarElement = 
  <>
    <button className='key spacebar-key' onClick={() => handleAddText(' ')}><div className="spacebar-icon">]</div></button>
  </>;
  const capslockElement = 
  <>
    <button className='key capslock-key' onClick={() => handleCapsLock()}>caps</button>
  </>;
  const shiftElement = 
  <>
    <button className='key shift-key' onClick={() => handleCaseChange()}>shift</button>
  </>;

  characterGroup.forEach((row, index) => {
    rows[index] = row.split('');
  })

  const handleAddText = (event) => {
    if(uppercase){
      let uppercaseText = event.toUpperCase();
      console.log(uppercaseText);
      addText(text + event.toUpperCase());
      if(!capslock) {
        handleCaseChange();
      }
    } else {
      addText(text + event);
    }
  }

  const handleCaseChange = () => {
    if(!uppercase) {
      let lowercaseKey = document.querySelectorAll('.lowercase-key');

      lowercaseKey.forEach(key => {
        key.innerHTML = key.innerHTML.toUpperCase();

        key.removeAttribute('lowercase-key');
        key.setAttribute('class', 'key uppercase-key');
      })
      toggleCaps(!uppercase);
    } else {
      let uppercaseKey = document.querySelectorAll('.uppercase-key');

      uppercaseKey.forEach(key => {
        key.innerHTML = key.innerHTML.toLowerCase();

        key.removeAttribute('uppercase-key');
        key.setAttribute('class', 'key lowercase-key');
      })
      toggleCaps(!uppercase);
    }
  }

  const handleCapsLock = () => {
    toggleCapslock(!capslock);
    handleCaseChange();
  };
  
  // const renderKeyboard = () => {
  //   return lowercaseKeyboard;
  // }
  useEffect(() => {
    let renderedRows = document.querySelectorAll(".row");
    let backspaceKey = document.querySelector(".backspace-key");
    let capslockKey = document.querySelector(".capslock-key");
    let shiftKey = document.querySelector(".shift-key");

    renderedRows[0].append(backspaceKey);
    renderedRows[2].prepend(capslockKey);
    renderedRows[3].prepend(shiftKey);
  });

  return (
    <>
      <Navbar />
      <main>
        <header>
          <code>Type anything using the virtual keyboard</code>
          <code>(or your own keyboard)</code>
        </header>
        <textarea className="typed-text" value={text} onChange={handleAddText}></textarea>
        <div className="keyboard">
          {backspaceElement}
          {
          rows.map(row =>(
            <div className="row">
            {row.map((key) => (
              <button className='key lowercase-key' onClick={() => handleAddText(key)}>{key}</button>
            ))}
            </div>
          ))}
          {capslockElement}
          {shiftElement}
          {spacebarElement}
        </div>
      </main>
    </>
  )
}
>>>>>>> cd0e115 (gh-pages commit)
