import { useTranslation } from 'react-i18next';

export const Projects = () => {
	const { t } = useTranslation();
	return (
		<section id="projects" className="bg-inherit lg:pt-16 xl:py-24 xl:px-16 p-8">
			<div className="flex flex-col gap-8">
				<h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
					{t('home.projects.title')}
				</h1>
				<p className="text-center text-xl leading-relaxed text-gray-400">{t('home.projects.description')} </p>
			</div>
			<div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center"></div>
		</section>
	);
};
