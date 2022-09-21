import React from 'react';

export default function Key(props) {
    const textArea = document.querySelector('typed-text');
    // const text = textArea.getAttribute('value');

    return (
        <button dataid={props.dataid} className='key' onClick={() => {
            textArea.setAttribute('value', props.children)
        }}>{props.children}</button>
    )
}