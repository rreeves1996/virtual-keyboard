import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import '../assets/style/style.css';
const MOBILE_KEYBOARD = require('../keyboard-json/mobile.json');

interface MobileKeyboardProps {
	handleAddText: (arg?: any) => void;
	handleBackspace: () => void;
	handleCaseChange: () => void;
}

export default function MobileKeyboard({
	handleAddText,
	handleBackspace,
	handleCaseChange,
}: MobileKeyboardProps) {
	const [page, setPage] = useState('chars');
	const { regchars, numbers, specchars } = MOBILE_KEYBOARD.mobile;

	const shiftElement = (
		<button className='key shift-key' onClick={() => handleCaseChange()}>
			<i className='fa-solid fa-up-long'></i>
		</button>
	);

	const spacebarElement = (
		<button className='key spacebar-key' onClick={() => handleAddText(' ')}>
			<div className='spacebar-icon'>]</div>
		</button>
	);
	const backspaceElement = (
		<button className='key backspace-key' onClick={() => handleBackspace()}>
			<i className='fa-solid fa-delete-left'></i>
		</button>
	);
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

	const handlePageSwitch = (page: string) => {
		switch (page) {
			case '123':
				setPage('nums');
				break;
			case 'abc':
				setPage('chars');
				break;
			case '#+=':
				setPage('spec');
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		const keyboard = document.querySelector('.mobile-keyboard');
		const renderedRows: NodeListOf<HTMLElement> =
			document.querySelectorAll('.row');
		const backspaceKey = document.querySelectorAll('.backspace-key');
		const shiftKey = document.querySelector('.shift-key');
		const pageSwitcher = document.querySelector('.pageswitcher-key');
		const specSwitcher = document.querySelector('.special-key');
		const spacebar = document.querySelector('.spacebar-key');
		switch (page) {
			case 'chars':
				renderedRows[2].append(backspaceKey);
				renderedRows[2].prepend(shiftKey);
				break;
			case 'nums':
				renderedRows[2].append(backspaceKey);
				renderedRows[2].prepend(specSwitcher);
				keyboard?.append(pageSwitcher);
				keyboard?.append(spacebar);
				break;
			case 'spec':
				return;
			default:
				break;
		}
	}, []);

	const renderKeyboard = () => {
		switch (page) {
			case 'chars':
				return chars;
			case 'nums':
				return nums;
			case 'spec':
				return spec;
			default:
				break;
		}
	};

	const chars = (
		<>
			{regchars.map((row: any, index: number) => (
				<div className='row'>
					{index === 2 ? shiftElement : <></>}
					{row.map((key: any) => (
						<button
							className='key lowercase-key'
							onClick={() => handleAddText(key)}>
							{key}
						</button>
					))}
					{index === 2 ? backspaceElement : <></>}
				</div>
			))}

			{pageSwitcherElement('123')}
			{spacebarElement}
		</>
	);

	const nums = (
		<>
			{numbers.map((row: any, index: number) => (
				<div className='row'>
					{index === 2 ? shiftElement : <></>}
					{row.map((key: any) => (
						<button className='key' onClick={() => handleAddText(key)}>
							{key}
						</button>
					))}
					{index === 2 ? backspaceElement : <></>}
				</div>
			))}

			{subPageSwitcherElement('#+=')}
			{pageSwitcherElement('abc')}
			{spacebarElement}
		</>
	);

	const spec = (
		<>
			{specchars.map((row: any, index: number) => (
				<div className='row'>
					{row.map((key: any) => (
						<button className='key' onClick={() => handleAddText(key)}>
							{key}
						</button>
					))}
					{index === 2 ? backspaceElement : <></>}
				</div>
			))}

			{subPageSwitcherElement('123')}
			{pageSwitcherElement('abc')}
			{spacebarElement}
		</>
	);

	return <div className='keyboard mobile-keyboard'>{renderKeyboard()}</div>;
}
