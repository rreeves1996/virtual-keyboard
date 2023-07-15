import React from 'react';

type KeyboardSwitcherProps = {
	keyboard: string;
	setKeyboard: (arg: string) => void;
};

export default function KeyboardSwitcher({
	keyboard,
	setKeyboard,
}: KeyboardSwitcherProps) {
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
