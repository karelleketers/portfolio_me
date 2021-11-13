import blob from './../../../../assets/figures/blob_home_2.png';
import bcard from './../../../../assets/img/businesscard.png';
import { useSkillsBatch, useSkillsTitle, useSkillBlob, useCounter } from "./../../hooks";
import blender from './../../../../assets/figures/blender.png';
import express from './../../../../assets/figures/express.png';
import graphql from './../../../../assets/figures/graphql.png';
import gsap from './../../../../assets/figures/gsap.png';
import javascript from './../../../../assets/figures/javascript.png';
import nestjs from './../../../../assets/figures/nestjs.png';
import php from './../../../../assets/figures/php.png';
import postgresql from './../../../../assets/figures/postgresql.png';
import react from './../../../../assets/figures/react.png';
import sass from './../../../../assets/figures/sass.png';
import tailwind from './../../../../assets/figures/tailwind.png';
import typescript from './../../../../assets/figures/typescript.png';


export const Skills = () => {

	useSkillsBatch(".skills");
	useSkillsTitle(".skillspart", ".skillstext", ".skillstextcont");
	useSkillBlob(".blobdown", ".blobbers");
	useCounter(".experience", ".projects", ".smiles", ".blobbers");

	return (
	<section className="">
		<section className="skillscont px-6 md:px-9 lg:px-12 flex flex-wrap items-center max-w-textherosm xli:max-w-textheromd m-auto">
			<h2 className="m-auto py-8 md:py-9 xli:py-12 leading-tight text-titlesmall sm:text-7xl md:text-title547 xl:text-title1024 flex flex-col font-bold">
				<div className="overflow-hidden">
					<p className="skillspart text-gold">What</p>
				</div>
				<div className="flex flex-nowrap overflow-hidden">
					<p className="text-gold skillspart">I&nbsp;</p>
					<p className="text-light skillspart">do</p>
				</div>
			</h2>
			<div className="skillstextcont overflow-hidden my-6 md:my-9 xli:my-12 ">
				<p className="skillstext w-full font-mendlight sm:text-xl leading-normal md:text-small lg:text-2xl">Fast-moving trends require rock-solid core really tough skills. If you wanna something, ask me about what I wanna learn.</p>
			</div>
		</section>
		<section className="text-gold p-9 grid grid-cols-1 grid-rows-12 gap-y-5 xs:grid-cols-2 xs:grid-rows-8 md:py-12 md:gap-y-6 lg:grid-cols-3 lg:grid-rows-4 lg:py-7 lg:gap-y-10 2xl:grid-cols-10 2xl:grid-rows-3">
			<div className="skills 2xl:col-span-4">
				<img src={react} alt="skill" className="m-auto" />
			</div>
			<div className="skills 2xl:col-span-2">
				<img src={postgresql} alt="skill" className="m-auto" />
			</div>
			<div className="skills xs:col-span-2 lg:col-span-1 2xl:col-span-4">
				<img src={nestjs} alt="skill" className="m-auto" />
			</div>
			<div className="skills 2xl:col-start-1 2xl:col-end-3">
				<img src={blender} alt="skill" className="m-auto" />
			</div>
			<div className="skills 2xl:col-start-3 2xl:col-end-5">
				<img src={php} alt="skill" className="m-auto" />
			</div>
			<div className="skills xs:col-span-2 lg:col-span-1 2xl:col-start-5 2xl:col-end-7" >
				<img src={express} alt="skill" className="m-auto" />
			</div>
			<div className="skills 2xl:col-span-2 2xl:col-start-7 2xl:col-end-9">
				<img src={tailwind} alt="skill" className="m-auto" />
			</div>
			<div className="skills 2xl:col-span-2 2xl:col-start-9">
				<img src={graphql} alt="skill" className="m-auto" />
			</div>
			<div className="skills xs:col-span-2 lg:col-span-1 2xl:col-span-2 2xl:col-start-2">
				<img src={typescript} alt="skill" className="m-auto" />
			</div>
			<div className="skills 2xl:col-span-2 2xl:col-start-4">
				<img src={sass} alt="skill" className="m-auto" />
			</div>		
			<div className="skills 2xl:col-span-2 2xl:col-start-6">
				<img src={gsap} alt="skill" className="m-auto" />
			</div>
			<div className="skills xs:col-span-2 lg:col-span-1 2xl:col-span-2 2xl:col-start-8">
				<img src={javascript} alt="skill" className="m-auto" />
			</div>
		</section>
		<section className="overflow-hidden my-6 md:my-9 xli:my-12 h-full relative">
			<div className="blobdown box-content relative w-full z-20">
				<img src={blob} alt="blob" className="absolute max-w-none -left-16 z-20 lg:w-69 xl:w-95 xli:w-110 2xl:w-130" />
			</div>
			<div className="blobbers relative z-30 bg-light font-bold flex flex-wrap justify-around items-start py-16">
				<div className="flex flex-col text-gold">
					<p className="experience text-blobmed m-auto xs:text-intermezzo360lg sm:text-intermezzo420lg md:text-intermezzo547lg lg:text-intermezzo768lg xl:text-intermezzo1024lg xli:text-8xl 2xl:text-intermezzo1680lg">1.5</p>
					<p className="leading-none text-sm flex flex-col text-center xs:text-lg sm:text-xl md:text-2xl xl:text-blobsm xli:text-blobmed 2xl:text-intermezzo1680sm"><span>years of</span><span>experience</span></p>
				</div>
				<div className="flex flex-col text-dark">
					<p className="projects text-blobmed m-auto xs:text-intermezzo360lg sm:text-intermezzo420lg md:text-intermezzo547lg lg:text-intermezzo768lg xl:text-intermezzo1024lg xli:text-8xl 2xl:text-intermezzo1680lg">13</p>
					<p className="leading-none text-sm text-center xs:text-lg sm:text-xl md:text-2xl xl:text-blobsm xli:text-blobmed 2xl:text-intermezzo1680sm">projects</p>
				</div>
				<div className="flex flex-col text-gold">
					<p className="smiles text-blobmed m-auto xs:text-intermezzo360lg sm:text-intermezzo420lg md:text-intermezzo547lg lg:text-intermezzo768lg xl:text-intermezzo1024lg xli:text-8xl 2xl:text-intermezzo1680lg">7</p>
					<p className="leading-none text-sm text-center xs:text-lg sm:text-xl md:text-2xl xl:text-blobsm xli:text-blobmed 2xl:text-intermezzo1680sm">smiles</p>
				</div>
			</div>
			<div className="box-content h-bcard_sm relative w-full md:w-screen xl:h-bcard_lg xli:h-bcard_xl 2xl:h-bcard_2xl">
				<img src={bcard} alt="bcard mockup" className="object-cover h-full max-w-none absolute -top-4 md:w-full"/>
			</div>
		</section>
	</section>
	)}