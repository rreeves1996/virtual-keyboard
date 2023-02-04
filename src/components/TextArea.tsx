import React, { useEffect, useState } from 'react';
import Keyboard from './Desktop/Keyboard';
import MobileKeyboard from './Mobile/MobileKeyboard';
import '../assets/style/style.css';

export default function TextArea() {
	const [text, addText] = useState('');
	const [uppercase, toggleCaps] = useState(false);
	const [capslock, toggleCapslock] = useState(false);
	const [width, setWidth] = useState(0);

	const handleAddText = (event: any) => {
		if (uppercase) {
			addText(text + event.toUpperCase());
			if (!capslock) {
				handleCaseChange();
			}
		} else {
			addText(text + event);
		}
	};

	const handleCaseChange = () => {
		if (!uppercase) {
			let lowercaseKey = document.querySelectorAll('.lowercase-key');

			lowercaseKey.forEach((key) => {
				key.innerHTML = key.innerHTML.toUpperCase();

				key.removeAttribute('lowercase-key');
				key.setAttribute('class', 'key uppercase-key');
			});
			toggleCaps(!uppercase);
		} else {
			let uppercaseKey = document.querySelectorAll('.uppercase-key');

			uppercaseKey.forEach((key) => {
				key.innerHTML = key.innerHTML.toLowerCase();

				key.removeAttribute('uppercase-key');
				key.setAttribute('class', 'key lowercase-key');
			});
			toggleCaps(!uppercase);
		}
	};

	const handleCapsLock = () => {
		toggleCapslock(!capslock);
		handleCaseChange();
	};

	const handleBackspace = () => {
		addText(text.slice(0, -1));
	};

	useEffect(() => {
		queryScreenWidth();

		window.addEventListener('resize', queryScreenWidth);
		return () => window.removeEventListener('resize', queryScreenWidth);
	}, []);

	const queryScreenWidth = () => {
		const width = window.innerWidth;
		setWidth(width);
	};

	return (
		<>
			<textarea
				className='typed-text'
				value={text}
				onChange={handleAddText}></textarea>
			{width > 768 ? (
				<Keyboard
					handleAddText={handleAddText}
					handleCaseChange={handleCaseChange}
					handleCapsLock={handleCapsLock}
					handleBackspace={handleBackspace}
				/>
			) : (
				<MobileKeyboard
					handleAddText={handleAddText}
					handleCaseChange={handleCaseChange}
					handleBackspace={handleBackspace}
				/>
			)}
		</>
	);
}
