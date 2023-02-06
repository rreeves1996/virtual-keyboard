import React from 'react';
import {
	ShiftKeyProps,
	BackSpaceKeyProps,
	SpaceBarKeyProps,
	CapsLockKeyProps,
	KeyProps,
} from '../../interfaces/interfaces';
const KEYBOARD = require('../../keyboard-json/desktop.json');

type KeyboardProps = ShiftKeyProps &
	BackSpaceKeyProps &
	SpaceBarKeyProps &
	CapsLockKeyProps;

function Key({ children, handleAddText }: KeyProps) {
	return (
		<button
			className='key lowercase-key'
			onClick={() => handleAddText(children)}>
			{children}
		</button>
	);
}

function ShiftKey({ handleCaseChange }: ShiftKeyProps) {
	return (
		<button className='key shift-key' onClick={() => handleCaseChange()}>
			shift
		</button>
	);
}

function BackSpaceKey({ handleBackspace }: BackSpaceKeyProps) {
	return (
		<button className='key backspace-key' onClick={() => handleBackspace()}>
			<i className='fa-solid fa-arrow-left-long'></i>
		</button>
	);
}

function SpaceBarKey({ handleAddText }: SpaceBarKeyProps) {
	return (
		<button className='key spacebar-key' onClick={() => handleAddText(' ')}>
			<div className='spacebar-icon'>]</div>
		</button>
	);
}

function CapsLockKey({ handleCapsLock }: CapsLockKeyProps) {
	return (
		<button className='key capslock-key' onClick={() => handleCapsLock()}>
			caps
		</button>
	);
}

export default function DesktopKeyboardContainer({
	handleAddText,
	handleBackspace,
	handleCapsLock,
	handleCaseChange,
}: KeyboardProps) {
	const { regchars } = KEYBOARD.desktop;

	return (
		<>
			<div className='keyboard'>
				{regchars.map((row: any, index: number) => (
					<div className='row'>
						{index === 2 ? (
							<CapsLockKey handleCapsLock={handleCapsLock} />
						) : null}

						{index === 3 ? (
							<ShiftKey handleCaseChange={handleCaseChange} />
						) : null}

						{row.map((key: any) => (
							<Key handleAddText={handleAddText}>{key}</Key>
						))}

						{index === 0 ? (
							<BackSpaceKey handleBackspace={handleBackspace} />
						) : null}
					</div>
				))}

				<SpaceBarKey handleAddText={handleAddText} />
			</div>
		</>
	);
}
