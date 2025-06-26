import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { MdLocationPin, MdOutlineEditCalendar } from 'react-icons/md';
import LocalesEN from '../../locales/en/translation.json';
import LocalesES from '../../locales/es/translation.json';
import { BsCheck2Circle } from 'react-icons/bs';

interface ExperienceCardProps {
	dateFrom: Date;
	dateTo: Date;
	jobCompany: string;
	jobLocation: string;
	jobPosition: string;
	jobDescription: string;
	jobAchivements: string[];
}

const ExperienceCard: FC<ExperienceCardProps> = ({
	dateFrom,
	dateTo,
	jobAchivements,
	jobCompany,
	jobDescription,
	jobLocation,
	jobPosition,
}) => {
	const { t } = useTranslation();
	const getMonth = (date: Date) => {
		return date.toLocaleString(undefined, {
			year: '2-digit',
			month: '2-digit',
		});
	};

	return (
		<div className="flex flex-col gap-4 border border-gray-700 bg-app-secondary rounded-md p-8 shadow-md hover:shadow-2xl transition-all duration-300">
			<div className="flex justify-between items-center">
				<div className="flex flex-col">
					<h3 className="text-xl sm:text-2xl md:text-4xl text-white font-semibold">{jobPosition}</h3>
					<h4 className="text-lg sm:text-xl  text-indigo-500 font-bold">{jobCompany}</h4>
				</div>
				<div className="flex flex-col gap-3">
					<div className="flex items-center gap-2">
						<MdOutlineEditCalendar size={20} className="text-gray-400" />
						<div className="flex gap-1">
							<span className="text-gray-400 text-sm">{getMonth(dateFrom)}</span>
							<span className="text-gray-400 text-sm">-</span>
							<span className="text-gray-400 text-sm">{getMonth(dateTo)}</span>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<MdLocationPin size={20} className="text-gray-400" />
						<span className="text-gray-400 text-sm">{jobLocation}</span>
					</div>
				</div>
			</div>
			<p className="text-gray-400">{jobDescription}</p>
			<div className="flex flex-col gap-2">
				<span className="text-white font-medium">{t('home.experience.key_achievements')}</span>
				<div className="flex flex-col gap-2">
					{jobAchivements.map((ach) => (
						<div className="ml-2 flex gap-2 items-center">
							<BsCheck2Circle size={15} color="#38C865" />
							<span className="text-gray-400 text-sm">{ach}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export const Experience = () => {
	const { t, i18n } = useTranslation();
	const items = i18n.language === 'es' ? LocalesES.home.experience.items : LocalesEN.home.experience.items;
	return (
		<section id="experience" className="bg-inherit lg:pt-16 xl:py-24 xl:px-24 p-8">
			<div className="grid gap-8 lg:gap-12 items-center">
				<h1 className="text-left text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
					{t('home.experience.title')}
				</h1>
				{items.map((item) => (
					<ExperienceCard
						{...item}
						dateFrom={new Date(item.dateFrom)}
						dateTo={new Date(item.dateTo)}
						key={item.jobCompany}
					/>
				))}
			</div>
		</section>
	);
};
