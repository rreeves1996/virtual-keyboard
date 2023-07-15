type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}

type ReactFragment = {} | ReactNodeArray;

type ReactNode =
	| ReactChild
	| ReactFragment
	| ReactPortal
	| boolean
	| null
	| undefined;

type KeyProps = {
	children: ReactNode;
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

type KeyboardSwitcherProps = {
	keyboard: string;
	setKeyboard: (arg: string) => void;
};
