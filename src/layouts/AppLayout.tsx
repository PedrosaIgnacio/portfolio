import { Navbar } from '@/components/navbar/navbar';
import { type FC, type JSX } from 'react';

interface AppLayout {
	children: JSX.Element;
}

export const AppLayout: FC<AppLayout> = ({ children }) => {
	return (
		<div className="w-full min-h-screen flex flex-col bg-app-primary items-center">
			<Navbar />
			<div className="flex flex-1 bg-inherit container">{children}</div>
		</div>
	);
};
