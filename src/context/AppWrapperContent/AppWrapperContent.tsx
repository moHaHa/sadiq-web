import { Modal } from 'antd';
import { MessageInstance } from 'antd/es/message/interface';
import useMessage from 'antd/es/message/useMessage';
import { ModalStaticFunctions } from 'antd/es/modal/confirm';
import { FC, ReactNode, createContext, useContext, useState } from 'react';
import { TMine, useMinesQuery } from '~/server/auth/useMineQuery';
import tokenService, { ITokenPayload } from '~/services/tokenService';
// import { UserType } from '~/server';
type UserType = any;

interface AppWrapperContextType {
	message: MessageInstance;
	modal: Omit<ModalStaticFunctions, 'warn'>;
	user: ITokenPayload | null;
	mine: TMine | undefined;
	setUser: React.Dispatch<React.SetStateAction<ITokenPayload | null>>;
	setRole: React.Dispatch<React.SetStateAction<UserType | null>>;
	role: UserType | null;
}

const AppWrapperContext = createContext({} as AppWrapperContextType);

export const AppWrapperContextProvider: FC<{ children?: ReactNode }> = ({ children }) => {
	const [user, setUser] = useState<ITokenPayload | null>(tokenService.getTokenPayload());
	const [role, setRole] = useState<UserType | null>(null);
	const [modal, modalContext] = Modal.useModal();
	const [message, messageContext] = useMessage();
	const { data } = useMinesQuery({
		enabled: !!user?.id,
	});
	return (
		<AppWrapperContext.Provider
			value={{
				mine: data != undefined ? { ...data, role: 'admin' } : undefined,
				modal,
				message,
				user,
				setUser,
				setRole,
				role,
			}}
		>
			{children}
			{modalContext}
			{messageContext}
		</AppWrapperContext.Provider>
	);
};

export const useAppWrapperContext = () => {
	const appWrapperContext = useContext(AppWrapperContext);

	if (!appWrapperContext) {
		throw new Error('useAppWrapperContext has to be used within <AppWrapperContext.Provider>');
	}

	return appWrapperContext;
};
