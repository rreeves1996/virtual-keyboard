import React, { useState } from 'react';
const MOBILE_KEYBOARD = require('../../keyboard-json/mobile.json');

interface ShiftKeyProps {
	handleCaseChange: () => void;
}

interface BackSpaceKeyProps {
	handleBackspace: () => void;
}

interface SpaceBarKeyProps {
	handleAddText: (arg?: any) => void;
}

interface MobileKeyboardProps {
	handleAddText: (arg?: any) => void;
	handleBackspace: () => void;
	handleCaseChange: () => void;
}

export function ShiftKey({ handleCaseChange }: ShiftKeyProps) {
	return (
		<button className='key shift-key' onClick={() => handleCaseChange()}>
			<i className='fa-solid fa-up-long'></i>
		</button>
	);
}

export function BackSpaceKey({ handleBackspace }: BackSpaceKeyProps) {
	return (
		<button className='key backspace-key' onClick={() => handleBackspace()}>
			<i className='fa-solid fa-delete-left'></i>
		</button>
	);
}

export function SpaceBarKey({ handleAddText }: SpaceBarKeyProps) {
	return (
		<button className='key spacebar-key' onClick={() => handleAddText(' ')}>
			<div className='spacebar-icon'>]</div>
		</button>
	);
}

export default function MobileKeyboard({
	handleAddText,
	handleBackspace,
	handleCaseChange,
}: MobileKeyboardProps) {
	const [page, setPage] = useState('chars');
	const { regchars, numbers, specchars } = MOBILE_KEYBOARD.mobile;

	function pageSwitcherElement(page: any) {
		return (
			<button
				className='key pageswitcher-key'
				onClick={() => handlePageSwitch(page)}>
				<div className='pageswitcher-icon'>{page}</div>
			</button>
		);
	}

	function subPageSwitcherElement(page: any) {
		return (
			<button
				className='key special-key'
				onClick={() => handlePageSwitch(page)}>
				<div className='pageswitcher-icon'>{page}</div>
			</button>
		);
	}

	const chars = (
		<>
			{regchars.map((row: any, index: number) => (
				<div className='row'>
					{index === 2 ? (
						<ShiftKey handleCaseChange={handleCaseChange} />
					) : null}
					{row.map((key: any) => (
						<button
							className='key lowercase-key'
							onClick={() => handleAddText(key)}>
							{key}
						</button>
					))}
					{index === 2 ? (
						<BackSpaceKey handleBackspace={handleBackspace} />
					) : null}
				</div>
			))}

			{pageSwitcherElement('123')}
			<SpaceBarKey handleAddText={handleAddText} />
		</>
	);

	const nums = (
		<>
			{numbers.map((row: any, index: number) => (
				<div className='row'>
					{index === 2 ? subPageSwitcherElement('#+=') : <></>}
					{row.map((key: any) => (
						<button className='key' onClick={() => handleAddText(key)}>
							{key}
						</button>
					))}
					{index === 2 ? (
						<BackSpaceKey handleBackspace={handleBackspace} />
					) : null}
				</div>
			))}

			{pageSwitcherElement('abc')}
			<SpaceBarKey handleAddText={handleAddText} />
		</>
	);

	const spec = (
		<>
			{specchars.map((row: any, index: number) => (
				<div className='row'>
					{index === 2 ? subPageSwitcherElement('123') : <></>}

					{row.map((key: any) => (
						<button className='key' onClick={() => handleAddText(key)}>
							{key}
						</button>
					))}
					{index === 2 ? (
						<BackSpaceKey handleBackspace={handleBackspace} />
					) : null}
				</div>
			))}

			{pageSwitcherElement('abc')}
			<SpaceBarKey handleAddText={handleAddText} />
		</>
	);

	const handlePageSwitch = (page: Required<string>) => {
		switch (page) {
			case '123': {
				setPage('nums');
				break;
			}
			case 'abc': {
				setPage('chars');
				break;
			}
			case '#+=': {
				setPage('spec');
				break;
			}
			default: {
				break;
			}
		}
	};

	const renderKeyboard = () => {
		switch (page) {
			case 'chars': {
				return chars;
			}
			case 'nums': {
				return nums;
			}
			case 'spec': {
				return spec;
			}
			default: {
				break;
			}
		}
	};

	return <div className='keyboard mobile-keyboard'>{renderKeyboard()}</div>;
}
