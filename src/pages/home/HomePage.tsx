import { Tech } from '@/components/tech/tech';
import { Experience } from '@/components/experience/experience';
import { Projects } from '@/components/projects/projects';
import { Profile } from '@/components/profile/profile';

export const HomePage = () => {
	return (
		<div className="bg-inherit flex flex-col">
			<Profile />
			<Tech />
			<Experience />
			<Projects />
		</div>
	);
};
