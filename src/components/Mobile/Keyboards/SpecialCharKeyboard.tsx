import React from 'react';
import SecondaryKeyboardSwitcher from '../Keys/SecondaryKeyboardSwitcher';
import MobileKey from '../Keys/MobileKey';
import BackSpaceKey from '../Keys/BackSpaceKey';
import KeyboardSwitcher from '../Keys/KeyboardSwitcher';
import SpaceBarKey from '../Keys/SpaceBarKey';
const MOBILE_KEYBOARD = require('../mobile-keyboard.json');

type SecondaryKeyboardLayoutProps = BackSpaceKeyProps &
	SpaceBarKeyProps & {
		setKeyboard: (arg: string) => void;
	};

export default function SpecialCharKeyboard({
	handleAddText,
	handleBackspace,
	setKeyboard,
}: SecondaryKeyboardLayoutProps) {
	const { specchars } = MOBILE_KEYBOARD;

	return (
		<>
			{/* First, map the three individual rows */}
			{specchars.map((row: string[], index: number) => (
				<div className='row'>
					{/* If on the third row, add the secondary keyboard toggler at the beginning of the row */}
					{index === 2 ? (
						<SecondaryKeyboardSwitcher
							keyboard={'123'}
							setKeyboard={setKeyboard}
						/>
					) : null}

					{/* Map through the actual keys that are on the current row being mapped */}
					{row.map((key: string) => (
						<MobileKey handleAddText={handleAddText}>{key}</MobileKey>
					))}

					{/* If on the third row, add backspace key at the end of the row */}
					{index === 2 ? (
						<BackSpaceKey handleBackspace={handleBackspace} />
					) : null}
				</div>
			))}

			{/* Add keyboard toggler and spacebar at the bottom! */}
			<KeyboardSwitcher keyboard='abc' setKeyboard={setKeyboard} />

			<SpaceBarKey handleAddText={handleAddText} />
		</>
	);
}
