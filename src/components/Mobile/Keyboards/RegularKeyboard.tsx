import React from 'react';
import ShiftKey from '../Keys/ShiftKey';
import MobileKey from '../Keys/MobileKey';
import BackSpaceKey from '../Keys/BackSpaceKey';
import KeyboardSwitcher from '../Keys/KeyboardSwitcher';
import SpaceBarKey from '../Keys/SpaceBarKey';
const MOBILE_KEYBOARD = require('../mobile-keyboard.json');

type RegularKeyboardLayoutProps = ShiftKeyProps &
	BackSpaceKeyProps &
	SpaceBarKeyProps & {
		setKeyboard: (arg: string) => void;
		uppercase: boolean;
	};

export default function RegularKeyboard({
	handleCaseChange,
	handleAddText,
	handleBackspace,
	setKeyboard,
	uppercase,
}: RegularKeyboardLayoutProps) {
	const { regchars, capschars } = MOBILE_KEYBOARD;

	// If uppercase is not true, map lowercase keyboard
	if (!uppercase) {
		return (
			<>
				{/* First, map the three individual rows */}
				{regchars.map((row: string[], index: number) => (
					<div className='row'>
						{/* If on the third row, add shift key at the beginning of the row */}
						{index === 2 ? (
							<ShiftKey handleCaseChange={handleCaseChange} />
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
				<KeyboardSwitcher keyboard='123' setKeyboard={setKeyboard} />

				<SpaceBarKey handleAddText={handleAddText} />
			</>
		);
	} else {
		// If uppercase IS true, map the uppercase keyboard!
		return (
			<>
				{/* First, map the three individual rows */}
				{capschars.map((row: string[], index: number) => (
					<div className='row'>
						{index === 2 ? (
							<ShiftKey handleCaseChange={handleCaseChange} />
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
				<KeyboardSwitcher keyboard='123' setKeyboard={setKeyboard} />

				<SpaceBarKey handleAddText={handleAddText} />
			</>
		);
	}
}
