import React, {  useEffect, useState } from 'react';
import Keyboard from './Keyboard';
import '../assets/style/style.css';


export default function TextArea() {
    const [text, addText] = useState('');
    const [uppercase, toggleCaps] = useState(false);
    const [capslock, toggleCapslock] = useState(false);

    const handleAddText = (event) => {
        if(uppercase){
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

    const handleBackspace = () => {
        addText(text.slice(0, -1));
    };


  return (
    <>
        <textarea className="typed-text" value={text} onChange={handleAddText}></textarea>
        <Keyboard 
            handleAddText={handleAddText}
            handleCaseChange={handleCaseChange}
            handleCapsLock={handleCapsLock}
            handleBackspace={handleBackspace}/>
    </>
  )
}
