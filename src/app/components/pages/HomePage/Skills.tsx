import blob from './../../../assets/figures/blob_home_2.png';
import bcard from './../../../assets/img/businesscard.png';
import { useSkillsBatch, useSkillsTitle, useSkillBlob, useCounter } from "./../../hooks";
import blender from './../../../assets/figures/blender.png';
import express from './../../../assets/figures/express.png';
import graphql from './../../../assets/figures/graphql.png';
import gsap from './../../../assets/figures/gsap.png';
import javascript from './../../../assets/figures/javascript.png';
import nestjs from './../../../assets/figures/nestjs.png';
import php from './../../../assets/figures/php.png';
import postgresql from './../../../assets/figures/postgresql.png';
import react from './../../../assets/figures/react.png';
import sass from './../../../assets/figures/sass.png';
import tailwind from './../../../assets/figures/tailwind.png';
import typescript from './../../../assets/figures/typescript.png';


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
					<p className="text-light skillspart">do.</p>
				</div>
			</h2>
			<div className="skillstextcont overflow-hidden my-6 md:my-9 xli:my-12 ">
				<p className="skillstext w-full font-mendlight sm:text-xl leading-normal md:text-small lg:text-2xl">This is a selection of the tools I most commonly use. But my knowledge grows on a steady basis. If you're really curious, ask me about what I want to learn.</p>
			</div>
		</section>
		<section className="p-9 grid grid-cols-1 grid-rows-12 gap-5 xs:grid-cols-4 xs:grid-rows-8 md:py-12 md:gap-y-6 lg:grid-cols-3 lg:grid-rows-4 lg:py-7 lg:gap-y-10 xl:grid-cols-10 xl:grid-rows-3">
			<div className="xs:col-span-2 lg:col-span-1 lg:row-span-1 skills xl:col-span-2 xl:col-start-3">
				<img src={react} alt="skill" className="w-full" />
			</div>
			<div className="lg:col-span-1 lg:row-span-1 xs:col-span-2 skills xl:col-span-2 xl:col-start-5">
				<img src={postgresql} alt="skill" className="w-full" />
			</div>
			<div className="lg:col-span-1 lg:row-span-1 skills xs:col-span-2  xs:col-start-2 xl:col-span-2 xl:col-start-7">
				<img src={nestjs} alt="skill" className="w-full" />
			</div>
			<div className="lg:col-span-1 lg:row-span-1 xs:col-span-2 skills xl:col-span-2 xl:col-start-1">
				<img src={blender} alt="skill" className="w-full" />
			</div>
			<div className="lg:col-span-1 lg:row-span-1 xs:col-span-2 skills xl:col-span-2 xl:col-start-3">
				<img src={php} alt="skill" className="w-full" />
			</div>
			<div className="lg:col-span-1 lg:row-span-1 skills xs:col-start-2 xs:col-span-2 xl:col-span-2 xl:col-start-5" >
				<img src={express} alt="skill" className="w-full" />
			</div>
			<div className="lg:col-span-1 lg:row-span-1 xs:col-span-2 skills xl:col-span-2 xl:col-start-7">
				<img src={tailwind} alt="skill" className="w-full" />
			</div>
			<div className="lg:col-span-1 lg:row-span-1 xs:col-span-2 skills xl:col-span-2 xl:col-start-9">
				<img src={graphql} alt="skill" className="w-full" />
			</div>
			<div className="lg:col-span-1 lg:row-span-1 skills xs:col-span-2 xs:col-start-2 xl:col-span-2 xl:col-start-2">
				<img src={typescript} alt="skill" className="w-full" />
			</div>
			<div className="lg:col-span-1 lg:row-span-1 xs:col-span-2 skills xl:col-span-2 xl:col-start-4">
				<img src={sass} alt="skill" className="w-full" />
			</div>		
			<div className="lg:col-span-1 lg:row-span-1 xs:col-span-2 skills xl:col-span-2 xl:col-start-6">
				<img src={gsap} alt="skill" className="w-full" />
			</div>
			<div className="lg:col-span-1 lg:row-span-1 skills xs:col-span-2 xs:col-start-2 xl:col-span-2 xl:col-start-8">
				<img src={javascript} alt="skill" className="w-full" />
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
					<p className="smiles text-blobmed m-auto xs:text-intermezzo360lg sm:text-intermezzo420lg md:text-intermezzo547lg lg:text-intermezzo768lg xl:text-intermezzo1024lg xli:text-8xl 2xl:text-intermezzo1680lg">1k+</p>
					<p className="leading-none text-sm flex flex-col text-center xs:text-lg sm:text-xl md:text-2xl xl:text-blobsm xli:text-blobmed 2xl:text-intermezzo1680sm"><span>smiles</span><span>achieved</span></p>
				</div>
			</div>
			<div className="box-content h-bcard_sm relative w-full md:w-screen xl:h-bcard_lg xli:h-bcard_xl 2xl:h-bcard_2xl max-w-120">
				<img src={bcard} alt="bcard mockup" className="object-cover h-full max-w-none absolute -top-4 md:w-full"/>
			</div>
		</section>
	</section>
	)}