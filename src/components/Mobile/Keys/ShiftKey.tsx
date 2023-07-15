import React from 'react';

export default function ShiftKey({ handleCaseChange }: ShiftKeyProps) {
	return (
		<button className='key shift-key' onClick={() => handleCaseChange()}>
			<i className='fa-solid fa-up-long' />
		</button>
	);
}
