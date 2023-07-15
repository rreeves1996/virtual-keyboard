import React from 'react';

export default function MobileKey({ children, handleAddText }: KeyProps) {
	return (
		<button
			className='key lowercase-key'
			onClick={() => handleAddText(children)}>
			{children}
		</button>
	);
}
