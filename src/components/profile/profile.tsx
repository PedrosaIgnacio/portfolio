import ProfilePicture from '../../assets/profile-picture.jpeg';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

export const Profile = () => {
	const { t } = useTranslation();

	const handleClickGithubAccount = () => window.open('https://github.com/PedrosaIgnacio');
	const handleClickEmailAccount = () => window.open('mailto:ipedrosa.dev@gmail.com');

	const position_words: string[] = t('home.profile.position').split(' ');
	const colors = ['text-white', 'text-indigo-500'];

	return (
		<section id="profile" className="bg-inherit pt-24 lg:pt-32 xl:px-24 p-8 scroll-smooth">
			<div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
				<div className="flex flex-col gap-8">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold w-full flex flex-wrap justify-center xl:justify-normal tracking-tighter leading-15">
						{position_words.map((word, index) => (
							<span key={index} className={`${colors[index] ?? colors[colors.length - 1]} mr-3`}>
								{word}
							</span>
						))}
					</h1>
					<div className="flex gap-3 items-center rounded-full bg-app-secondary px-3 py-1 w-fit">
						<div className="w-2 h-2 rounded-full bg-[#38C865]" />
						<span className="text-sm font-semibold leading-relaxed text-gray-400">
							{t('home.profile.available_chip')}
						</span>
					</div>
					<p className="text-xl leading-relaxed text-gray-400">{t('home.profile.description')} </p>
					<div className="flex gap-4">
						<Button onClick={handleClickGithubAccount}>
							{t('home.buttons.github')}
							<BsGithub />
						</Button>
						<Button onClick={handleClickEmailAccount}>
							{t('home.buttons.email')}
							<MdEmail />
						</Button>
					</div>
				</div>
				<div className="flex justify-center xl:justify-end">
					<div className="relative w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[500px] md:h-[500px] flex items-center justify-center xl:justify-end">
						<div className="xl:-top-40 xl:-right-40 xl:-left-10 xl:-bottom-10 absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 via-slate-500 to-blue-500 blur-3xl opacity-20 " />
						<img
							src={ProfilePicture}
							alt="Foto de perfil"
							className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] xl:w-[400px] xl:h-[400px] object-cover rounded-full border border-gray-700 shadow-xl z-10"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
