import { Modal } from 'antd';
import { MessageInstance } from 'antd/es/message/interface';
import useMessage from 'antd/es/message/useMessage';
import { ModalStaticFunctions } from 'antd/es/modal/confirm';
import { FC, ReactNode, createContext, useContext, useState } from 'react';
// import { UserType } from '~/server';
type UserType = any
import tokenService, { ITokenPayload } from '~/services/tokenService';

interface LayoutContextType {
	message: MessageInstance;
	modal: Omit<ModalStaticFunctions, 'warn'>;
	user: ITokenPayload | null;
	setUser: React.Dispatch<React.SetStateAction<ITokenPayload | null>>;
	setRole: React.Dispatch<React.SetStateAction<UserType | null>>;
	role: UserType | null;
}

const LayoutContext = createContext({} as LayoutContextType);

export const LayoutContextProvider: FC<{ children?: ReactNode }> = ({ children }) => {
	const [user, setUser] = useState<ITokenPayload | null>(tokenService.getTokenPayload());
	const [role, setRole] = useState<UserType | null>(null);
	const [modal, modalContext] = Modal.useModal();
	const [message, messageContext] = useMessage();

	return (
		<LayoutContext.Provider value={{ modal, message, user, setUser, setRole, role }}>
			{children}
			{modalContext}
			{messageContext}
		</LayoutContext.Provider>
	);
};

export const useLayoutContext = () => {
	const layoutContext = useContext(LayoutContext);

	if (!layoutContext) {
		throw new Error('useLayoutContext has to be used within <LayoutContext.Provider>');
	}

	return layoutContext;
};
