import React, { useState } from 'react';
import RegularKeyboard from './Keyboards/RegularKeyboard';
import NumberKeyboard from './Keyboards/NumberKeyboard';
import SpecialCharKeyboard from './Keyboards/SpecialCharKeyboard';

type MobileKeyboardContainerProps = ShiftKeyProps &
	BackSpaceKeyProps &
	SpaceBarKeyProps & {
		uppercase: boolean;
	};

export default function MobileKeyboardContainer({
	handleAddText,
	handleBackspace,
	handleCaseChange,
	uppercase,
}: MobileKeyboardContainerProps) {
	const [keyboard, setKeyboard] = useState('chars');

	const renderKeyboard = () => {
		switch (keyboard) {
			case 'chars': {
				return (
					<RegularKeyboard
						handleCaseChange={handleCaseChange}
						handleAddText={handleAddText}
						handleBackspace={handleBackspace}
						setKeyboard={setKeyboard}
						uppercase={uppercase}
					/>
				);
			}
			case 'nums': {
				return (
					<NumberKeyboard
						handleAddText={handleAddText}
						handleBackspace={handleBackspace}
						setKeyboard={setKeyboard}
					/>
				);
			}
			case 'spec': {
				return (
					<SpecialCharKeyboard
						handleAddText={handleAddText}
						handleBackspace={handleBackspace}
						setKeyboard={setKeyboard}
					/>
				);
			}
			default: {
				break;
			}
		}
	};

	return <div className='keyboard mobile-keyboard'>{renderKeyboard()}</div>;
}
