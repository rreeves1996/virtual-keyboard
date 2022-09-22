import { render } from '@testing-library/react';
import React, {  useEffect, useState } from 'react';
import '../assets/style/style.css';


export default function Keyboard({ handleAddText, handleBackspace, handleCapsLock, handleCaseChange }) {
    const [page,setPage] = useState("chars")


    const mobileChars = `qwertyuiop asdfghjkl zxcvbnm`;
    const mobileNumbers = `1234567890 -/:;()$&@" .,?!'`
    const mobileSpecial = `[]{}#%^* +=_|@~<> .,?!`
    const mobileCharGroup = mobileChars.split(' ');
    const mobileNumbersGroup = mobileNumbers.split(' ');
    const mobileSpecialGroup = mobileSpecial.split(' ');
    let rows = [, , ,];
    const chars =
    <>  
        {rows.map(row => (
            <div className="row">
                {row.map((key) => (
                    <button className='key lowercase-key' onClick={() => handleAddText(key)}>{key}</button>
                ))}
            </div>
        ))}
        <button className='key backspace-key' onClick={() => handleBackspace()}><i className="fa-solid fa-arrow-left-long"></i></button>
        <button className='key shift-key' onClick={() => handleCaseChange()}>shift</button>
        {spacebarElement}
    </>;
    const spacebarElement = 
    <>
        <button className='key spacebar-key' onClick={() => handleAddText(' ')}><div className="spacebar-icon">]</div></button>
    </>;


    mobileCharGroup.forEach((row, index) => {
        rows[index] = row.split('');
    })

    const renderKeyboard = () => {
        switch(page) {
            case "chars":
                return;
            case "numbers":
                return;
            case "special":
                return;
        }
    }
    
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
            {renderKeyboard()};
        </div>
    </>
  )
}
