import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const MOBILE_KEYBOARD = require('../../keyboard-json/mobile.json');
const { regchars, numbers, specchars } = MOBILE_KEYBOARD.mobile;

type MobileKeyboardContainerProps = ShiftKeyProps &
	BackSpaceKeyProps &
	SpaceBarKeyProps & {
		uppercase: boolean;
	};

type KeyboardSwitcherProps = {
	keyboard: string;
	setKeyboard: (arg: string) => void;
};

type RegularKeyboardLayoutProps = ShiftKeyProps &
	BackSpaceKeyProps &
	SpaceBarKeyProps & {
		setKeyboard: (arg: string) => void;
		uppercase: boolean;
	};

type SecondaryKeyboardLayoutProps = BackSpaceKeyProps &
	SpaceBarKeyProps & {
		setKeyboard: (arg: string) => void;
	};

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
			<i className='fa-solid fa-up-long' />
		</button>
	);
}

function BackSpaceKey({ handleBackspace }: BackSpaceKeyProps) {
	return (
		<button className='key backspace-key' onClick={() => handleBackspace()}>
			<i className='fa-solid fa-delete-left' />
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

function KeyboardSwitcher({ keyboard, setKeyboard }: KeyboardSwitcherProps) {
	return (
		<button
			className='key pageswitcher-key'
			onClick={() =>
				keyboard === 'abc' ? setKeyboard('chars') : setKeyboard('nums')
			}>
			<div className='pageswitcher-icon'>{keyboard}</div>
		</button>
	);
}

function SecondaryKeyboardSwitcher({
	keyboard,
	setKeyboard,
}: KeyboardSwitcherProps) {
	return (
		<button
			className='key special-key'
			onClick={() =>
				keyboard === '123' ? setKeyboard('nums') : setKeyboard('spec')
			}>
			<div className='pageswitcher-icon'>{keyboard}</div>
		</button>
	);
}

function RegularKeyboard({
	handleCaseChange,
	handleAddText,
	handleBackspace,
	setKeyboard,
	uppercase,
}: RegularKeyboardLayoutProps) {
	return (
		<>
			{regchars.map((row: string[], index: number) => (
				<div className='row'>
					{index === 2 ? (
						<ShiftKey handleCaseChange={handleCaseChange} />
					) : null}

					{row.map((key: string) => (
						<Key handleAddText={handleAddText} key={uuidv4()}>
							{uppercase ? key.toUpperCase() : key}
						</Key>
					))}

					{index === 2 ? (
						<BackSpaceKey handleBackspace={handleBackspace} />
					) : null}
				</div>
			))}

			<KeyboardSwitcher keyboard='123' setKeyboard={setKeyboard} />

			<SpaceBarKey handleAddText={handleAddText} />
		</>
	);
}

function NumberKeyboard({
	handleAddText,
	handleBackspace,
	setKeyboard,
}: SecondaryKeyboardLayoutProps) {
	return (
		<>
			{numbers.map((row: string[], index: number) => (
				<div className='row'>
					{index === 2 ? (
						<SecondaryKeyboardSwitcher
							keyboard={'#+='}
							setKeyboard={setKeyboard}
						/>
					) : null}

					{row.map((key: string) => (
						<Key handleAddText={handleAddText}>{key}</Key>
					))}

					{index === 2 ? (
						<BackSpaceKey handleBackspace={handleBackspace} />
					) : null}
				</div>
			))}

			<KeyboardSwitcher keyboard='abc' setKeyboard={setKeyboard} />

			<SpaceBarKey handleAddText={handleAddText} />
		</>
	);
}

function SpecialCharKeyboard({
	handleAddText,
	handleBackspace,
	setKeyboard,
}: SecondaryKeyboardLayoutProps) {
	return (
		<>
			{specchars.map((row: string[], index: number) => (
				<div className='row'>
					{index === 2 ? (
						<SecondaryKeyboardSwitcher
							keyboard={'123'}
							setKeyboard={setKeyboard}
						/>
					) : null}

					{row.map((key: string) => (
						<Key handleAddText={handleAddText}>{key}</Key>
					))}

					{index === 2 ? (
						<BackSpaceKey handleBackspace={handleBackspace} />
					) : null}
				</div>
			))}

			<KeyboardSwitcher keyboard='abc' setKeyboard={setKeyboard} />

			<SpaceBarKey handleAddText={handleAddText} />
		</>
	);
}

export default function MobileKeyboardContainer({
	handleAddText,
	handleBackspace,
	handleCaseChange,
	uppercase,
}: MobileKeyboardContainerProps) {
	const [keyboard, setKeyboard] = useState('chars');

	const renderKeyboard = () => {
		switch (keyboard) {
			case 'chars': {
				return (
					<RegularKeyboard
						handleCaseChange={handleCaseChange}
						handleAddText={handleAddText}
						handleBackspace={handleBackspace}
						setKeyboard={setKeyboard}
						uppercase={uppercase}
					/>
				);
			}
			case 'nums': {
				return (
					<NumberKeyboard
						handleAddText={handleAddText}
						handleBackspace={handleBackspace}
						setKeyboard={setKeyboard}
					/>
				);
			}
			case 'spec': {
				return (
					<SpecialCharKeyboard
						handleAddText={handleAddText}
						handleBackspace={handleBackspace}
						setKeyboard={setKeyboard}
					/>
				);
			}
			default: {
				break;
			}
		}
	};

	return <div className='keyboard mobile-keyboard'>{renderKeyboard()}</div>;
}
