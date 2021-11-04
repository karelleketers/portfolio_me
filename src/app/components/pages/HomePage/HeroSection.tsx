import React from 'react';
import hero from './../../../../assets/figures/hero.svg';
import blob from './../../../../assets/figures/blob_home_1.png';
import video from './../../../../assets/videos/video.mp4';
import { useScrollWindow, useTitleSlider, useTitleSection, useHeroBlob, useHeroImg } from "./../../hooks";

export const Hero = () => {

	useScrollWindow(".hero", ".topscreen");
	useTitleSlider(".herotitle", ".spanner1", ".spanner2", ".spanner3", ".spanner4", ".spanner5");
	useHeroImg(".hero");
	useTitleSection(".herotitle", ".herotext", ".herocont");
	useHeroBlob(".blobcont", ".blobtext");

		return (
			<section className="">
				<section className="topscreen h-screen relative">
					<video autoPlay loop muted className="absolute z-20 h-screen w-full top-1/2 left-1/2 object-cover -translate-y-2/4 -translate-x-1/2">
						<source src={video} type="video/mp4"></source>
					</video>
				</section>
				<section className="herocont h-screen pt-12 relative flex flex-wrap items-center justify-end">
					<div className="hero box-content absolute w-full right-heroright md:left-heroleft lg:top-herodown">
						<img src={hero} alt="hero" className="h-screen lg:h-120 xli:h-160 max-w-none opacity-30"/>
					</div>
					<section className="px-6 md:px-9 lg:px-12">
						<h2 className="herotitle py-8 md:py-9 xli:py-12 font-bold text-titlesmall sm:text-xl md:text-title547 xl:text-title1024 flex flex-wrap overflow-hidden relative">
							<p className="text-gold w-full lg:w-auto leading-tight lg:leading-none">I am&nbsp;</p>
							<div className="overflow-hidden relative leading-title pb-dev-bottom-sm sm:pb-dev-bottom-md md:pb-dev-bottom-lg xl:pb-dev-bottom-xl mt-dev-top-sm xl:mt-2">
								<p className="opacity-0">a developer</p>
								<p className="spanner1 absolute left-0 top-0 opacity-1">Ella.</p>
								<p className="spanner2 absolute left-0 top-up opacity-0">a developer</p>
								<p className="spanner3 absolute left-0 top-up opacity-0">a designer </p>
								<p className="spanner4 absolute left-0 top-up opacity-0">a builder</p>
								<p className="spanner5 absolute left-0 top-up opacity-0">custom</p>
							</div>
						</h2>
						<div className="overflow-hidden m-auto max-w-textherosm xli:max-w-textheromd mt-6 mb-9 md:mt-9 md:mb-12 xli:mt-12 xli:mb-16 ">
							<p className="herotext font-mendlight sm:text-xl leading-normal md:text-small lg:text-2xl">But there’s many things I’m not. I am not an opera singer nor am I an aeronaut, or, as you can clearly see, I am not an illustrator. But I don’t let the things that I’m not define me. They can’t stop me from doing what I want. </p>
						</div>
						<div className="overflow-hidden m-auto max-w-textherosm xli:max-w-textheromd mb-6 md:mb-9 xli:mb-12">
							<p className="herotext font-mendlight sm:text-xl leading-normal md:text-small lg:text-2xl">And most of all, <span className="text-gold">I want to learn things</span></p>
						</div>
					</section>
				</section>
				<section className="blobcont relative">
					<div className="box-content relative w-full h-blob_1_lg lg:h-blob_1_sm mt-4 mb-6 md:mb-9">
						<img src={blob} alt="blob" className="absolute max-w-none lg:w-blob_1_sm -top-52 lg:-top-16 left-1/5 md:left-40 lg:left-72" />
					</div>
					<p className="blobtext font-light text-small break-words w-1/2 lg:w-2/5 xl:w-1/2 absolute text-gold top-35 right-4 lg:right-9 xl:right-12 xli:left-35 2xl:left-1/4 leading-normal sm:text-blobsm lg:text-blobmed xl:text-4xl">We are made from star stuff, <span className="text-dark">but</span> blablabla slkjljsdfsdgsdgalk sfsdg<span className="text-dark">llkdgadg</span> dgsdgasdags sdgd<span className="text-dark">sgasdgsagsd</span>gsdgasdgasgsgsgagsd</p>
				</section>
			</section>
		)
}