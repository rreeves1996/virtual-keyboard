import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './assets/style/style.css';
import { render } from '@testing-library/react';

export default function App() {
  const [text, addText] = useState('');
  const characters = `1234567890-= qwertyuiop[] asdfghjkl;' zxcvbnm,./`;

  let rows = [, , ,];
  const backspaceKeyElement = 
  <>
    <button className='key backspace-key' onClick={() => addText(text.slice(0, -1))}><i className="fa-solid fa-arrow-left-long"></i></button>
  </>;
  const spacebarElement = 
  <>
    <button className='key spacebar-key' onClick={() => handleAddText(' ')}><div className="spacebar-icon">]</div></button>
  </>;
  const characterGroup = characters.split(' ');
  
  characterGroup.forEach((row, index) => {
    rows[index] = row.split('');
  })

  const handleAddText = (event) => {
    addText(text + event);
    console.log(event);
  }

  useEffect(() => {
    let renderedRows = document.querySelectorAll(".row");
    let backspaceKey = document.querySelector(".backspace-key")
    renderedRows[0].append(backspaceKey);
  })

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
          {backspaceKeyElement}
          {
          rows.map(row =>(
            <div className="row">
            {row.map((key) => (
              <button className='key' onClick={() => handleAddText(key)}>{key}</button>
            ))}
            </div>
          ))}
          {spacebarElement}
        </div>
      </main>
    </>
  );
}
