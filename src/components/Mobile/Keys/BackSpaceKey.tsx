import React from 'react';

export default function BackSpaceKey({ handleBackspace }: BackSpaceKeyProps) {
	return (
		<button className='key backspace-key' onClick={() => handleBackspace()}>
			<i className='fa-solid fa-delete-left' />
		</button>
	);
}
