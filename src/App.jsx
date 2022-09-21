import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './assets/style/style.css';

export default function App() {
  const [text, addText] = useState('');
  const characters = `1234567890-= qwertyuiop[] asdfghjkl;' zxcvbnm,./`;
  const characterGroup = characters.split(' ');
  let rows = [, , ,];

  characterGroup.forEach((row, index) => {
    rows[index] = row.split('');
  })

  const handleAddText = (event) => {
    addText(text + event);
    console.log(event);
  }

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
          {
          rows.map(row =>(
            <div className="row">
            {row.map((key) => (
              <button className='key' onClick={() => handleAddText(key)}>{key}</button>
            ))}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
