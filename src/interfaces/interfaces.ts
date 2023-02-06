export interface KeyProps {
	children: string;
	handleAddText: (arg?: string) => void;
}

export interface ShiftKeyProps {
	handleCaseChange: () => void;
}

export interface BackSpaceKeyProps {
	handleBackspace: () => void;
}

export interface SpaceBarKeyProps {
	handleAddText: (arg?: any) => void;
}

export interface CapsLockKeyProps {
	handleCapsLock: () => void;
}
