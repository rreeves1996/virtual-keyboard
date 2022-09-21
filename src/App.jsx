import React from 'react';
import Navbar from './components/Navbar';
import Key from './components/Key'
import './assets/style/style.css';

export default function App() {
  const characters = `1234567890-= qwertyuiop[] asdfghjkl;' zxcvbnm,./`;
  const characterGroup = characters.split(' ');
  let rows = [, , ,];

  characterGroup.forEach((row, index) => {
    rows[index] = row.split('');
  })
  console.log(rows)
  return (
    <>
      <Navbar />
      <main>
        <header>
          <code>Type anything using the virtual keyboard</code>
          <code>(or your own keyboard)</code>
        </header>
        <textarea className="typed-text" value=''></textarea>
        <div className="keyboard">
          {
          rows.map(row =>(
            <div className="row">
            {row.map((key) => (
              <Key dataid={key}>{key}</Key>
            ))}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
