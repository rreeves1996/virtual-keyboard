type KeyProps = {
	children: string;
	handleAddText: (arg?: string) => void;
};

type ShiftKeyProps = {
	handleCaseChange: () => void;
};

type BackSpaceKeyProps = {
	handleBackspace: () => void;
};

type SpaceBarKeyProps = {
	handleAddText: (arg?: any) => void;
};

type CapsLockKeyProps = {
	handleCapsLock: () => void;
};
