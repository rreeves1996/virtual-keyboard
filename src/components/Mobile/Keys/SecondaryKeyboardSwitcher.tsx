import React from 'react';

export default function SecondaryKeyboardSwitcher({
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
