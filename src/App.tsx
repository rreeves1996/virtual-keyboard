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
		addText((prevState) => text + event);

		// If uppercase is true and capslock is NOT true, toggle uppercase
		if (uppercase) {
			if (!capslock) {
				toggleUppercase(!uppercase);
			}
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
		const newText = text.slice(0, -1);
		addText((prevState) => newText);
	};

	// useEffect to query window size
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
					{/* TextArea persists through mobile and desktop keyboards */}
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
