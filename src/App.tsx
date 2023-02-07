import React, { useState, useEffect } from 'react';
import './assets/style/style.css';

import Navbar from './components/Navbar';
import MobileKeyboardContainer from './components/Mobile/MobileKeyboard';
import DesktopKeyboardContainer from './components/Desktop/DesktopKeyboard';
import TextArea from './components/TextArea';

export default function App() {
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
			<Navbar />
			<main>
				<header>
					<code>Type anything using the virtual keyboard</code>
					<code>(or your own keyboard)</code>
				</header>
				<section>
					<TextArea text={text} handleAddText={handleAddText} />
					{width > 768 ? (
						<DesktopKeyboardContainer
							handleAddText={handleAddText}
							handleCaseChange={handleCaseChange}
							handleCapsLock={handleCapsLock}
							handleBackspace={handleBackspace}
						/>
					) : (
						<MobileKeyboardContainer
							handleAddText={handleAddText}
							handleCaseChange={handleCaseChange}
							handleBackspace={handleBackspace}
						/>
					)}
				</section>
			</main>
		</>
	);
}
