import React from 'react';
import hero from './../../../../assets/figures/hero.svg';
import blob from './../../../../assets/figures/blob_home_1.png';
import video from './../../../../assets/videos/video.mp4';

export const Hero = () => (
	<section className="">
			<section className="h-screen relative">
				<video autoPlay loop muted className="absolute z-20 h-screen w-full top-1/2 left-1/2 object-cover -translate-y-2/4 -translate-x-1/2">
					<source src={video} type="video/mp4"></source>
				</video>
			</section>
			<div className="box-content relative w-full h-hero pt-6 pb-8">
				<img src={hero} alt="hero" className="absolute w-hero max-w-none right-6 md:left-11"/>
			</div>
			<section className="px-4">
				<h2 className="py-4 font-bold text-titlesmall sm:text-xl flex flex-col"><span className="text-gold">I am</span><span> a developer</span></h2>
				<p className="pt-4 pb-5 font-mendlight sm:text-par sm:leading-8 md:pt-5 md:pb-6">But there’s many things I’m not. I am not an opera singer nor am I an aeronaut, or, as you can clearly see, I am not an illustrator. But I don’t let the things that I’m not define me. They can’t stop me from doing what I want. </p>
				<p className="pb-4 font-mendlight sm:text-par sm:leading-8 md:pb-5">And most of all, <span className="text-gold">I want to learn things</span></p>
			</section>
			<section className="relative">
				<div className="box-content relative w-full h-blob_1_h mt-2 mb-4 md:mb-5">
					<img src={blob} alt="blob" className="absolute max-w-none top-13 left-1/5" />
				</div>
				<p className="font-light text-small break-words w-1/2 absolute text-gold top-35 right-1 md:text-blobmed">We are made from star stuff, <span className="text-dark">but</span> blablabla slkjljsdfsdgsdgalk sfsdg<span className="text-dark">llkdgadg</span> dgsdgasdags sdgd<span className="text-dark">sgasdgsagsd</span>gsdgasdgasgsgsgagsd</p>
			</section>
	</section>
)