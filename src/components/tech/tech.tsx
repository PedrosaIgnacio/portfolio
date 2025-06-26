import { FaAws, FaDocker, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { DiNodejs, DiPostgresql } from 'react-icons/di';
import { SiAngular, SiMui, SiNestjs, SiTypescript } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import type { FC } from 'react';

interface ChipItemProps {
	label: string;
	color?: string;
}

const ChipItem: FC<ChipItemProps> = ({ label, color }) => {
	return (
		<div className="flex gap-3 items-center rounded-full bg-app-secondary px-3 py-1 w-fit">
			<div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: color }} />
			<span className="text-sm font-semibold leading-relaxed text-gray-400">{label}</span>
		</div>
	);
};

export const Tech = () => {
	const { t } = useTranslation();

	const tech_words: string[] = t('home.technologies.title').split(' ');
	const colors = ['text-white', 'text-indigo-500'];

	return (
		<section id="tech" className="bg-inherit lg:pt-16 xl:py-24 xl:px-24 p-8">
			<div className="bg-inherit grid gap-8 xl:grid-cols-[1fr_600px] [direction:rtl]">
				<div className="flex items-center justify-center xl:justify-normal">
					<div className="flex flex-col gap-8 text-center items-center xl:items-end justify-center xl:text-right [direction:ltr]">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold w-full flex flex-wrap justify-center xl:justify-end tracking-tighter leading-15">
							{tech_words.map((word, index) => (
								<span key={index} className={`${colors[index] ? colors[colors.length - 1] : colors[0]} mr-3`}>
									{word}
								</span>
							))}
						</h1>
						<p className="text-xl leading-relaxed text-gray-400">{t('home.technologies.description')}</p>
						<div className="flex gap-4 flex-wrap justify-center xl:justify-end">
							<ChipItem label={t('home.technologies.skills')} color="#3885c8" />
							<ChipItem label={t('home.technologies.abilities')} color="#c8af10" />
							<ChipItem label={t('home.technologies.libraries')} color="#b610c8" />
							<ChipItem label={t('home.technologies.frameworks')} color="#10c8b2" />
							<ChipItem label={t('home.technologies.languages')} color="#c85a10" />
						</div>
					</div>
				</div>
				<div className="bg-inherit overflow-hidden flex p-8 items-center justify-center xl:justify-end">
					<div className="rounded-full border border-gray-700 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] relative flex items-center justify-center bg-inherit z-0">
						<FaReact
							color="#57C4DC"
							size={60}
							className="p-2 text-white absolute -top-8 bg-inherit z-20 hover:scale-110 transition-all"
						/>
						<RiTailwindCssFill
							color="#00BCFF"
							size={60}
							className="p-2 text-white absolute -left-8 bg-inherit z-20 hover:scale-110 transition-all"
						/>
						<FaAws
							size={60}
							className="p-2 text-white absolute -right-8 bg-inherit z-20 hover:scale-110 transition-all"
						/>
						<SiAngular
							color="#D3088A"
							size={60}
							className="p-2 text-white absolute -bottom-8 bg-inherit z-20 hover:scale-110 transition-all"
						/>
						<DiNodejs
							color="#5F9F4E"
							size={60}
							className="p-2 text-white absolute top-6 left-6 sm:top-10 sm:left-8 md:top-15 md:left-10 bg-inherit z-20 hover:scale-110 transition-all"
						/>
						<SiNestjs
							color="#EA2750"
							size={60}
							className="p-2 text-white absolute top-6 right-6 sm:top-10 sm:right-8 md:top-15 md:right-10 bg-inherit z-20 hover:scale-110 transition-all"
						/>
						<DiPostgresql
							color="#336790"
							size={60}
							className="p-2 text-white absolute bottom-5 right-5 sm:bottom-10 sm:right-8 md:bottom-15 md:right-10 bg-inherit z-20 hover:scale-110 transition-all"
						/>
						<SiMui
							color="#0173E5"
							size={60}
							className="p-2 text-white absolute bottom-5 left-5 sm:bottom-10 sm:left-8 md:bottom-15 md:left-10 bg-inherit z-20 hover:scale-110 transition-all"
						/>
						<div className="bg-inherit rounded-full border border-gray-700 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] relative flex items-center justify-center z-0">
							<FaDocker
								color="#1C63ED"
								size={60}
								className="p-2 text-white absolute -top-4 left-4 sm:-top-5 sm:left-18 bg-inherit z-20 hover:scale-110 transition-all"
							/>
							<RiNextjsFill
								color="#000"
								size={60}
								className="p-2 text-white absolute -right-7 bg-inherit z-20 hover:scale-110 transition-all"
							/>
							<SiTypescript
								fill="#387BC8"
								size={60}
								className="p-2 text-white absolute -bottom-5 left-2 sm:-bottom-5 sm:left-18 bg-inherit z-20 hover:scale-110 transition-all"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
