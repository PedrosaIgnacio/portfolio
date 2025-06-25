import { BsBootstrap } from 'react-icons/bs';
import { FaAngular, FaAws, FaDocker, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { DiNodejs, DiPostgresql } from 'react-icons/di';
import { SiMui, SiNestjs, SiTypescript } from 'react-icons/si';

export const AnimatedTechStack = () => {
	return (
		<div className="bg-inherit overflow-hidden flex p-8 items-center justify-center lg:justify-normal">
			<div
				className="animate-spin animation-duration-[25s] rounded-full border border-gray-700 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] relative flex items-center justify-center bg-inherit z-0"
				style={{ animationDirection: 'reverse' }}
			>
				<div
					className="animate-spin animation-duration-[25s] absolute -top-8 bg-inherit z-20"
					style={{ animationDirection: 'reverse' }}
				>
					<div className="rotate-[0deg]">
						<FaReact size={60} className="p-2 text-white " />
					</div>
				</div>
				<div className="animate-spin animation-duration-[25s] absolute -left-8 bg-inherit z-20">
					<div className="rotate-[0deg]">
						<RiTailwindCssFill size={60} className="p-2 text-white " />
					</div>
				</div>
				<div className="animate-spin animation-duration-[25s] absolute -right-8 bg-inherit z-20">
					<div className="rotate-[0deg]">
						<FaAws size={60} className="p-2 text-white" />
					</div>
				</div>
				<div className="animate-spin animation-duration-[25s] absolute -bottom-8 bg-inherit z-20">
					<div className="rotate-[0deg]">
						<FaAngular size={60} className="p-2 text-white " />
					</div>
				</div>
				<div className="animate-spin animation-duration-[25s] absolute top-6 left-6 sm:top-10 sm:left-8 md:top-18 md:left-13 bg-inherit z-20">
					<div className="rotate-[0deg]">
						<DiNodejs size={60} className="p-2 text-white" />
					</div>
				</div>
				<div className="animate-spin animation-duration-[25s] absolute top-6 right-6 sm:top-10 sm:right-8 md:top-18 md:right-13 bg-inherit z-20">
					<div className="rotate-[0deg]">
						<SiNestjs size={60} className="p-2 text-white" />
					</div>
				</div>
				<div className="animate-spin animation-duration-[25s] absolute bottom-5 right-5 sm:bottom-10 sm:right-8 md:bottom-18 md:right-11 bg-inherit z-20">
					<div className="rotate-[0deg]">
						<DiPostgresql size={60} className="p-2 text-white" />
					</div>
				</div>
				<div className="animate-spin animation-duration-[25s] absolute bottom-5 left-5 sm:bottom-10 sm:left-8 md:bottom-18 md:left-11 bg-inherit z-20">
					<div className="rotate-[0deg]">
						<SiMui size={60} className="p-2 text-white" />
					</div>
				</div>
				<div className="animate-spin animation-duration-[10s] bg-inherit rounded-full border border-gray-700 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] relative flex items-center justify-center z-0">
					<div
						className="animate-spin animation-duration-[16s] absolute -top-4 left-4 sm:-top-5 sm:left-18 bg-inherit z-20"
						style={{ animationDirection: 'reverse' }}
					>
						<div className="rotate-[0deg]">
							<FaDocker size={60} className="p-2 text-white " />
						</div>
					</div>
					<div
						className="animate-spin animation-duration-[16s] absolute -right-7 bg-inherit z-20"
						style={{ animationDirection: 'reverse' }}
					>
						<div className="rotate-[0deg]">
							<BsBootstrap size={60} className="p-2 text-white " />
						</div>
					</div>
					<div
						className="animate-spin animation-duration-[16s] absolute -bottom-5 left-2 sm:-bottom-5 sm:left-18 bg-inherit z-20"
						style={{ animationDirection: 'reverse' }}
					>
						<div className="rotate-[0deg]">
							<SiTypescript size={60} className="p-2 text-white " />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
