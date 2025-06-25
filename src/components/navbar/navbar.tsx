import type { FC, JSX } from 'react';
import { useTranslation } from 'react-i18next';

interface NavbarItemProps {
	name: string;
	path?: string;
	onClick?: () => void;
	className?: string;
}

interface NavbarItem {
	name: string;
	path?: string;
	icon?: JSX.Element;
}

const NAVBAR_ITEMS: NavbarItem[] = [
	{
		name: 'navbar.items.home',
		path: '#home',
	},
	{
		name: 'navbar.items.tech',
		path: '#tech',
	},
	{
		name: 'navbar.items.experience',
		path: '#experience',
	},
	{
		name: 'navbar.items.projects',
		path: '#projects',
	},
];

const NavbarItem: FC<NavbarItemProps> = ({ name, path, onClick, className }) => {
	return (
		<a
			onClick={onClick}
			href={path}
			className={`text-white/70 hover:text-white cursor-pointer ${className} transition-all duration-300 hover:scale-105 relative group flex flex-col gap-1`}
		>
			{name}
			<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-slate-500 group-hover:w-full transition-all duration-300"></span>
		</a>
	);
};

export const Navbar = () => {
	const { t, i18n } = useTranslation();

	const changeLanguage = () => {
		i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
	};

	return (
		<nav className="fixed top-0 bg-app-secondary/90 backdrop-blur-md border-b border-b-gray-700 z-50 w-full h-16 flex justify-center items-center">
			<div className="flex container justify-between xl:px-24 px-8">
				<NavbarItem name={t('navbar.me')} path="/" className="text-xl font-light" />
				<div className="flex gap-8 items-center">
					{NAVBAR_ITEMS.map((item) => (
						<NavbarItem {...item} name={t(item.name)} />
					))}
					<NavbarItem name={t('navbar.items.language')} onClick={changeLanguage} className="text-xs font-bold" />
				</div>
			</div>
		</nav>
	);
};
