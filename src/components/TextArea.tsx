import React from 'react';

interface TextAreaProps {
	text: string;
	handleAddText: (arg?: any) => void;
}

export default function TextArea({ text, handleAddText }: TextAreaProps) {
	return (
		<textarea className='typed-text' value={text} onChange={handleAddText} />
	);
}
