import React, { useState, useEffect } from 'react';
import './assets/style/style.css';
import Navbar from './components/Navbar';
import MobileKeyboardContainer from './components/Mobile/MobileKeyboard';
import DesktopKeyboardContainer from './components/Desktop/DesktopKeyboard';
import TextArea from './components/TextArea';

export default function App() {
	const [text, addText] = useState('');
	const [uppercase, toggleUppercase] = useState(false);
	const [capslock, toggleCapslock] = useState(false);
	const [width, setWidth] = useState(0);

	const handleAddText = (event: any) => {
		if (uppercase) {
			addText((prevState) => text + event.toUpperCase());
			if (!capslock) {
				toggleUppercase(!uppercase);
			}
		} else {
			addText((prevState) => text + event);
		}
	};

	const handleCaseChange = () => {
		toggleUppercase(!uppercase);
	};

	const handleCapsLock = () => {
		toggleCapslock(!capslock);
		handleCaseChange();
	};

	const handleBackspace = () => {
		addText(text.slice(0, -1));
	};

	useEffect(() => {
		const queryScreenWidth = () => {
			const width = window.innerWidth;
			setWidth(width);
		};

		queryScreenWidth();

		window.addEventListener('resize', queryScreenWidth);
		return () => window.removeEventListener('resize', queryScreenWidth);
	}, []);

	return (
		<>
			<Navbar />
			<main>
				<header>
					<code>Type anything using the virtual keyboard</code>
				</header>
				<section>
					<TextArea text={text} handleAddText={handleAddText} />
					{width > 768 ? (
						<DesktopKeyboardContainer
							handleAddText={handleAddText}
							handleCaseChange={handleCaseChange}
							handleCapsLock={handleCapsLock}
							handleBackspace={handleBackspace}
							uppercase={uppercase}
						/>
					) : (
						<MobileKeyboardContainer
							handleAddText={handleAddText}
							handleCaseChange={handleCaseChange}
							handleBackspace={handleBackspace}
							uppercase={uppercase}
						/>
					)}
				</section>
			</main>
		</>
	);
}
