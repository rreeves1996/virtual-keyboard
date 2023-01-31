import React, {  useEffect } from 'react';
import '../assets/style/style.css';


export default function Keyboard({ handleAddText, handleBackspace, handleCapsLock, handleCaseChange }) {

    const characters = `1234567890-= qwertyuiop[] asdfghjkl;' zxcvbnm,./`;
    const characterGroup = characters.split(' ');
    let rows = [, , ,];
    const backspaceElement = 
    <>
        <button className='key backspace-key' onClick={() => handleBackspace()}><i className="fa-solid fa-arrow-left-long"></i></button>
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
        <div className="keyboard">
            {backspaceElement}
            {rows.map(row => (
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
    </>
  )
}
