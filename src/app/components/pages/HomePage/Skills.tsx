import React from 'react';
import skill from './../../../../assets/figures/skill.png';
import blob from './../../../../assets/figures/blob_home_2.png';
import bcard from './../../../../assets/img/businesscard.png';

export const Skills = () => (
	<section className="">
		<section className="px-4 flex flex-wrap items-center">
			<h2 className="m-auto py-4 text-titlesmall sm:text-xl flex flex-col font-bold"><span className="text-gold">What</span><span className="text-gold"> I <span className="text-light">do</span></span></h2>
			<p className="w-full py-4 font-mendlight sm:text-par sm:leading-8">Fast-moving trends require rock-solid core really tough skills. If you wanna something, ask me about what I wanna learn.  </p>
		</section>
		<section className="text-gold p-5 grid grid-cols-1 grid-rows-12 gap-y-5 xs:grid-cols-2 xs:grid-rows-8 md:py-6 md:gap-y-6">
			<div className="">
				<img src={skill} alt="skill" className="m-auto" />
				<p className="text-center mt-4 xs:text-base sm:text-intermezzolg">JavaScript</p>
			</div>
			<div className="">
				<img src={skill} alt="skill" className="m-auto" />
				<p className="text-center mt-4 xs:text-base sm:text-intermezzolg">GraphQL</p>
			</div>
			<div className="xs:col-span-2">
				<img src={skill} alt="skill" className="m-auto" />
				<p className="text-center mt-4 xs:text-base sm:text-intermezzolg">React</p>
			</div>
			<div className="">
				<img src={skill} alt="skill" className="m-auto" />
				<p className="text-center mt-4 xs:text-base sm:text-intermezzolg">MySQL</p>
			</div>
			<div className="">
				<img src={skill} alt="skill" className="m-auto" />
				<p className="text-center mt-4 xs:text-base sm:text-intermezzolg">Blender</p>
			</div>
			<div className="xs:col-span-2">
				<img src={skill} alt="skill" className="m-auto" />
				<p className="text-center mt-4 xs:text-base sm:text-intermezzolg">TypeScript</p>
			</div>
			<div className="">
				<img src={skill} alt="skill" className="m-auto" />
				<p className="text-center mt-4 xs:text-base sm:text-intermezzolg">Sass</p>
			</div>
			<div className="">
				<img src={skill} alt="skill" className="m-auto" />
				<p className="text-center mt-4 xs:text-base sm:text-intermezzolg">Express JS</p>
			</div>
			<div className="xs:col-span-2">
				<img src={skill} alt="skill" className="m-auto" />
				<p className="text-center mt-4 xs:text-base sm:text-intermezzolg">Adobe</p>
			</div>
			<div className="">
				<img src={skill} alt="skill" className="m-auto" />
				<p className="text-center mt-4 xs:text-base sm:text-intermezzolg">PHP</p>
			</div>		
			<div className="">
				<img src={skill} alt="skill" className="m-auto" />
				<p className="text-center mt-4 xs:text-base sm:text-intermezzolg">Nest JS</p>
			</div>
			<div className="xs:col-span-2">
				<img src={skill} alt="skill" className="m-auto" />
				<p className="text-center mt-4 xs:text-base sm:text-intermezzolg">Tailwind CSS</p>
			</div>
		</section>
		<section className="my-4 h-intfull relative">
			<div className="box-content relative w-full">
				<img src={blob} alt="blob" className="absolute max-w-none left-8 z-20 lg:w-69 xl:w-95 xli:w-110 2xl:w-130" />
			</div>
			<div className="font-bold flex flex-wrap justify-around items-start pt-7">
				<div className="flex flex-col text-gold z-30">
					<p className="text-intermezzolg m-auto xs:text-intermezzo360lg sm:text-intermezzo420lg md:text-intermezzo547lg lg:text-intermezzo768lg">1.5</p>
					<p className="text-intermezzosm flex flex-col text-center xs:text-intermezzo360sm sm:text-intermezzo420sm md:text-intermezzo547sm lg:text-intermezzo786sm"><span>years of</span><span>experience</span></p>
				</div>
				<div className="flex flex-col text-dark z-30">
					<p className="text-intermezzolg m-auto xs:text-intermezzo360lg sm:text-intermezzo420lg md:text-intermezzo547lg lg:text-intermezzo768lg">13</p>
					<p className="text-intermezzosm text-center xs:text-intermezzo360sm sm:text-intermezzo420sm md:text-intermezzo547sm lg:text-intermezzo786sm">projects</p>
				</div>
				<div className="flex flex-col text-gold z-30">
					<p className="text-intermezzolg m-auto xs:text-intermezzo360lg sm:text-intermezzo420lg md:text-intermezzo547lg lg:text-intermezzo768lg">7</p>
					<p className="text-intermezzosm text-center xs:text-intermezzo360sm sm:text-intermezzo420sm md:text-intermezzo547sm lg:text-intermezzo786sm">smiles</p>
				</div>
				<div className="box-content h-bcard_h relative w-full z-10 md:w-screen xl:h-bcardlg xli:h-bcardxl 2xl:h-bcard2xl">
					<img src={bcard} alt="bcard mockup" className="object-cover h-full max-w-none absolute top-4 -left-1/2 z-20 md:w-full"/>
				</div>
			</div>
		</section>
	</section>
)