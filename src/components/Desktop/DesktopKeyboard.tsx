import React from 'react';
import CapsLockKey from './Keys/CapsLockKey';
import ShiftKey from './Keys/ShiftKey';
import DesktopKey from './Keys/DesktopKey';
import BackSpaceKey from './Keys/BackSpaceKey';
import SpaceBarKey from './Keys/SpaceBarKey';
const DESKTOP_KEYBOARD = require('./desktop-keyboard.json');

type KeyboardProps = ShiftKeyProps &
	BackSpaceKeyProps &
	SpaceBarKeyProps &
	CapsLockKeyProps & {
		uppercase: boolean;
	};

export default function DesktopKeyboardContainer({
	handleAddText,
	handleBackspace,
	handleCapsLock,
	handleCaseChange,
	uppercase,
}: KeyboardProps) {
	// Deconstruct the regchars array and capschars array from the keyboard JSON
	const { regchars, capschars } = DESKTOP_KEYBOARD;

	// If uppercase is not true, map lowercase keyboard
	if (!uppercase) {
		return (
			<div className='keyboard'>
				{/* First, map the four individual rows */}
				{regchars.map((row: string[], index: number) => (
					<div className='row'>
						{/* If on the third row, add capslock key at the beginning of the row */}
						{index === 2 ? (
							<CapsLockKey handleCapsLock={handleCapsLock} />
						) : null}

						{/* If on the fourth row, add shift key at the beginning of the row */}
						{index === 3 ? (
							<ShiftKey handleCaseChange={handleCaseChange} />
						) : null}

						{/* Map through the actual keys that are on the current row being mapped */}
						{row.map((key: string) => (
							<DesktopKey handleAddText={handleAddText}>{key}</DesktopKey>
						))}

						{/* If on the first row, add capslock key at the end of the row */}
						{index === 0 ? (
							<BackSpaceKey handleBackspace={handleBackspace} />
						) : null}
					</div>
				))}

				{/* After all the rows are mapped, add the space bar at the bottom! */}
				<SpaceBarKey handleAddText={handleAddText} />
			</div>
		);
	} else {
		// If uppercase IS true, map the uppercase keyboard!
		return (
			<div className='keyboard'>
				{/* First, map the four individual rows */}
				{capschars.map((row: string[], index: number) => (
					<div className='row'>
						{/* If on the third row, add capslock key at the beginning of the row */}
						{index === 2 ? (
							<CapsLockKey handleCapsLock={handleCapsLock} />
						) : null}

						{/* If on the fourth row, add shift key at the beginning of the row */}
						{index === 3 ? (
							<ShiftKey handleCaseChange={handleCaseChange} />
						) : null}

						{/* Map through the actual keys that are on the current row being mapped */}
						{row.map((key: string) => (
							<DesktopKey handleAddText={handleAddText}>{key}</DesktopKey>
						))}

						{/* If on the first row, add capslock key at the end of the row */}
						{index === 0 ? (
							<BackSpaceKey handleBackspace={handleBackspace} />
						) : null}
					</div>
				))}

				{/* After all the rows are mapped, add the space bar at the bottom! */}
				<SpaceBarKey handleAddText={handleAddText} />
			</div>
		);
	}
}
