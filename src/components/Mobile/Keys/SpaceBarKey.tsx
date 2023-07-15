import React from 'react';

export default function SpaceBarKey({ handleAddText }: SpaceBarKeyProps) {
	return (
		<button className='key spacebar-key' onClick={() => handleAddText(' ')}>
			<div className='spacebar-icon'>]</div>
		</button>
	);
}
