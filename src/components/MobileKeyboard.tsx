import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import '../assets/style/style.css';

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

	const mobileChars = `qwertyuiop asdfghjkl zxcvbnm`;
	const mobileNumbers = `1234567890 -/:;()$&@ .,?!'"`;
	const mobileSpecial = `~[]{}#%^* +=_|@<> .,?!'"`;
	const mobileCharGroup = mobileChars.split(' ');
	const mobileNumbersGroup = mobileNumbers.split(' ');
	const mobileSpecialGroup = mobileSpecial.split(' ');
	let charRows: string[] = [];
	let numberRows: string[] = [];
	let specialRows: string[] = [];

	const shiftElement = (
		<>
			<button className='key shift-key' onClick={() => handleCaseChange()}>
				<i className='fa-solid fa-up-long'></i>
			</button>
		</>
	);
	const spacebarElement = (
		<>
			<button className='key spacebar-key' onClick={() => handleAddText(' ')}>
				<div className='spacebar-icon'>]</div>
			</button>
		</>
	);
	const backspaceElement = (
		<>
			<button className='key backspace-key' onClick={() => handleBackspace()}>
				<i className='fa-solid fa-delete-left'></i>
			</button>
		</>
	);
	function pageSwitcherElement(page: any) {
		return (
			<>
				<button
					className='key pageswitcher-key'
					onClick={() => handlePageSwitch(page)}>
					<div className='pageswitcher-icon'>{page}</div>
				</button>
			</>
		);
	}
	function subPageSwitcherElement(page: any) {
		return (
			<>
				<button
					className='key special-key'
					onClick={() => handlePageSwitch(page)}>
					<div className='pageswitcher-icon'>{page}</div>
				</button>
			</>
		);
	}
	useEffect(() => {}, []);
	mobileCharGroup.forEach((row, index) => {
		charRows[index] = row.split('');
	});

	mobileNumbersGroup.forEach((row, index) => {
		numberRows[index] = row.split('');
	});

	mobileSpecialGroup.forEach((row, index) => {
		specialRows[index] = row.split('');
	});

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
		let keyboard = document.querySelector('.mobile-keyboard');
		let renderedRows = document.querySelectorAll('.row');
		let backspaceKey = document.querySelector('.backspace-key');
		let shiftKey = document.querySelector('.shift-key');
		let pageSwitcher = document.querySelector('.pageswitcher-key');
		let specSwitcher = document.querySelector('.special-key');
		let spacebar = document.querySelector('.spacebar-key');
		switch (page) {
			case 'chars':
				renderedRows[2].append(backspaceKey);
				renderedRows[2].prepend(shiftKey);
				break;
			case 'nums':
				renderedRows[2].append(backspaceKey);
				renderedRows[2].prepend(specSwitcher);
				keyboard.append(pageSwitcher);
				keyboard.append(spacebar);
				break;
			case 'spec':
				return;
			default:
				break;
		}
	});

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
			{charRows.map((row) => (
				<div className='row'>
					{row.map((key) => (
						<button
							className='key lowercase-key'
							onClick={() => handleAddText(key)}>
							{key}
						</button>
					))}
				</div>
			))}
			{backspaceElement}
			{shiftElement}
			{pageSwitcherElement('123')}
			{spacebarElement}
		</>
	);

	const nums = (
		<>
			{numberRows.map((row) => (
				<div className='row'>
					{row.map((key: any) => (
						<button className='key' onClick={() => handleAddText(key)}>
							{key}
						</button>
					))}
				</div>
			))}
			{backspaceElement}
			{subPageSwitcherElement('#+=')}
			{pageSwitcherElement('abc')}
			{spacebarElement}
		</>
	);

	const spec = (
		<>
			{specialRows.map((row) => (
				<div className='row'>
					{row.map((key) => (
						<button className='key' onClick={() => handleAddText(key)}>
							{key}
						</button>
					))}
				</div>
			))}
			{backspaceElement}
			{subPageSwitcherElement('123')}
			{pageSwitcherElement('abc')}
			{spacebarElement}
		</>
	);

	return <div className='keyboard mobile-keyboard'>{renderKeyboard()}</div>;
}
