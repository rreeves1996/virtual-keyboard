import React, { useEffect } from 'react';
import '../assets/style/style.css';
const KEYBOARD = require('../keyboard-json/desktop.json');

interface KeyboardProps {
	handleAddText: (arg?: any) => void;
	handleBackspace: () => void;
	handleCapsLock: () => void;
	handleCaseChange: () => void;
}

export default function Keyboard({
	handleAddText,
	handleBackspace,
	handleCapsLock,
	handleCaseChange,
}: KeyboardProps) {
	const { regchars } = KEYBOARD.desktop;

	const backspaceElement = (
		<button className='key backspace-key' onClick={() => handleBackspace()}>
			<i className='fa-solid fa-arrow-left-long'></i>
		</button>
	);
	const spacebarElement = (
		<button className='key spacebar-key' onClick={() => handleAddText(' ')}>
			<div className='spacebar-icon'>]</div>
		</button>
	);
	const capslockElement = (
		<button className='key capslock-key' onClick={() => handleCapsLock()}>
			caps
		</button>
	);
	const shiftElement = (
		<button className='key shift-key' onClick={() => handleCaseChange()}>
			shift
		</button>
	);

	return (
		<>
			<div className='keyboard'>
				{backspaceElement}
				{regchars.map((row: any, index: number) => (
					<div className='row'>
						{index === 2 ? capslockElement : <></>}
						{index === 3 ? shiftElement : <></>}

						{row.map((key: any) => (
							<button
								className='key lowercase-key'
								onClick={() => handleAddText(key)}>
								{key}
							</button>
						))}
						{index === 0 ? backspaceElement : <></>}
					</div>
				))}
				{capslockElement}
				{shiftElement}
				{spacebarElement}
			</div>
		</>
	);
}
