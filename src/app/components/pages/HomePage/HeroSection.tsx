import React from 'react';
import hero from './../../../assets/figures/hero.svg';
import video from './../../../assets/videos/video.mp4';
import logo from './../../../assets/img/logo-lg.png'
import { useScrollWindow, useTitleSlider, useTitleSection, useHeroBlob, useHeroImg, useLogo } from "./../../hooks";

export const Hero = () => {

	useScrollWindow(".hero", ".topscreen");
	useTitleSlider(".herotitle", ".spanner1", ".spanner2", ".spanner3", ".spanner4", ".spanner5");
	useHeroImg(".hero");
	useTitleSection(".herotitle", ".herotext", ".herocont");
	useHeroBlob(".blobcont", ".blobtext", ".blobwrapper");
	useLogo(".logo-lg")

		return (
			<section className="">
				<section className="topscreen h-screen relative">
					<video autoPlay loop muted className="absolute z-100 h-screen w-full top-1/2 left-1/2 object-cover -translate-y-2/4 -translate-x-1/2">
						<source src={video} type="video/mp4"></source>
					</video>
					<div className="relative z-150 h-screen flex flex-wrap justify-center items-center">
						<img src={logo} alt="large logo" className="logo-lg absolute h-auto w-4/5 xl:h-4/5 max-h-logolg xl:max-h-none xl:w-auto"/>
					</div>
				</section>
				<section className="herocont h-screen max-h-heroimg pt-12 relative flex flex-wrap items-center justify-end">
					<div className="hero box-content absolute w-full right-heroright md:left-heroleft lg:top-herodown 2xl:left-herol 2xl:top-hero">
						<img src={hero} alt="hero" className="h-screen lg:h-120 xli:h-160 2xl:max-h-heroimg max-w-none opacity-30"/>
					</div>
					<section className="px-6 md:px-9 lg:px-12">
						<h2 className="herotitle py-8 md:py-9 xli:py-12 font-bold text-titlesmall sm:text-7xl md:text-title547 xl:text-title1024 flex flex-wrap overflow-hidden relative">
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
							<p className="herotext font-mendlight sm:text-xl leading-normal md:text-small lg:text-2xl">But there’s many things I’m not. I am not an opera singer nor am I an aeronaut, and — as you can clearly see — I am not an illustrator. But I don’t let the things that I’m not define me. They can’t stop me from doing what I want. </p>
						</div>
						<div className="overflow-hidden m-auto max-w-textherosm xli:max-w-textheromd mb-6 md:mb-9 xli:mb-12">
							<p className="herotext font-mendlight sm:text-xl leading-normal md:text-small lg:text-2xl">And most of all, <span className="text-gold">I want to learn things</span></p>
						</div>
					</section>
				</section>
				<section className="w-full blobwrapper h-screen max-h-logolg flex flex-wrap justify-center items-center relative my-8 lg:my-12">
					<div className="relative w-full h-over xl:h-1/2 flex flex-wrap justify-center items-center overflow-hidden">
						<div className="blobcont absolute w-full h-full bg-light">
						</div>
						<div className="mx-6 md:m-auto relative z-20 max-w-blobtext_int lg:max-w-blobtext_med xl:max-w-blobtext_lg 2xl:max-w-detail-blob">
							<p className="blobtext font-light text-xl lg:text-blobsm 2xl:text-4xl break-words text-gold leading-normal">We are all made from star stuff,<span className="text-dark">&nbsp;but&nbsp;</span>stars come in over 200<span className="text-dark">&nbsp;billion trillion&nbsp;</span>sorts. And yet, from the day they're born till the day they perish, they all<span className="text-dark">&nbsp;twinkle.&nbsp;</span></p>
						</div>	
					</div>
				</section>
			</section>
		)
}