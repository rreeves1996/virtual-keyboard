import React from 'react';

export default function CapsLockKey({ handleCapsLock }: CapsLockKeyProps) {
	return (
		<button className='key capslock-key' onClick={() => handleCapsLock()}>
			caps
		</button>
	);
}
