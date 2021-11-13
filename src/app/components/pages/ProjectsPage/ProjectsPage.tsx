/*Bunch of hacky stuff*/

import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Draggable from 'gsap/Draggable';
import { DetailButton } from '../../components';
import { Header } from './../../layout'

gsap.registerPlugin(ScrollTrigger, Draggable);


export const Projects = () => {
	const [status, setStatus] = useState({
		objects: [
			{id: 1, toggled: false},
			{id: 2, toggled: false},
			{id: 3, toggled: false},
			{id: 4, toggled: false},
			{id: 5, toggled: false},
			{id: 6, toggled: false},
        	{id: 7, toggled: false},
		]
	});

	const [toggleIndex, setToggleIndex] = useState(1);

	const [position, setPosition] = useState(2);

	const [isTransforming, setIsTransforming] = useState(false);
	
	const [isOpen, setIsOpen] = useState(false);

	const sliderRef = useRef(null);

	useLayoutEffect(() => {
		// eslint-disable-next-line no-restricted-globals
		/* screen.orientation.onchange = () => {window.location.reload()}; */
	}, []);
	
	useEffect(() => {
		let draggable = new Draggable(sliderRef.current, { // use a proxy element in order to swipe instead of scroll
			trigger: ".wrapper",
			type: "x",
			inertia: true,
			minimumMovement: 2,
			onDragEnd() {
				const goingRight = this.getDirection("start") === 'left';
				goingRight ? handleOnClick(0) : handleOnClick(1);
			}})

		return () => {
		draggable.kill()
		};
	}, [position, isOpen]);

	const toggleActive = (index: number): void => {
		let arrayCopy = [...status.objects];
		arrayCopy[index].toggled ? (arrayCopy[index].toggled = false) : (arrayCopy[index].toggled = true)
		if (toggleIndex >= 0 && index !== toggleIndex) {arrayCopy[toggleIndex].toggled = false}
		setStatus({...status, objects: arrayCopy});
		setToggleIndex(index);
		setIsOpen(arrayCopy[index].toggled);
	};

	useEffect(() => {
			ScrollTrigger.saveStyles(".container");
			ScrollTrigger.matchMedia({
				"(min-width: 1024px) and (max-width: 1920px)": () => {
					let id = toggleIndex + 1;

					const arrayofThree = position === 4 ? [4, 5, 6] : position === 5 ? [5, 6, 7] : [position, position + 1, position + 2];
					const rest = arrayofThree.filter(n => n !== id);

					let tl = gsap.timeline({defaults: {overwrite: "auto"}});
					if (status.objects[toggleIndex].toggled) {
						tl.to(".nav-buttons", {display: "none"})
						tl.to(`.bkgr`, {autoAlpha: 0, width: 0, duration: 0.1});
						tl.to(`h3`, {color: "#E4E4E4", scale: 1, duration: 0.1, ease: "sine.out"}, ">");
						tl.to(`.clicked`, {autoAlpha: 0, duration: 0.1, ease: "sine.out"}, ">");
						tl.add("one")
						tl.to(`.cont-${rest[0]}`, {width: "10vw",}, "one"); 
						tl.to(`.cont-${rest[1]}`, {width: "10vw",}, "one"); 
						tl.to(`.cont-${id}`, {width: "80vw",}, "one");
						tl.to(".modal", {autoAlpha: 0.8}, "one");
						tl.to(`.cont-${id} .bkgr`, {autoAlpha: 1, width: "60%"}, ">");
						tl.to(`.cont-${id} h3`, {color: "#B66C3B", scale: 6, duration: 0.8, ease: "sine.out"}, ">+0.1");
						tl.to(`.cont-${id} .clicked`, {autoAlpha: 1, duration: 0.8, ease: "sine.out"}, ">");

					} else {
						tl.add("one");
						tl.to(`.cont-${id} .clicked`, {autoAlpha: 0});
						tl.to(`.cont-${id} h3`, {color: "#E4E4E4", scale: 1, duration: 0.3, ease: "sine.out"}, ">");
						tl.to(`.cont-${id} .bkgr`, {autoAlpha: 0, width: 0}, ">");
						tl.to(".modal", {autoAlpha: 0.4}, "<");
						tl.to('.container', {width: "33.33333334vw"}, ">");
						tl.to(".nav-buttons", {display: "flex"})
					};

					return () => {
						tl.kill();
					}
				},
				"(min-width: 768px) and (max-width: 1023px)": () => {

					let id = toggleIndex + 1;

					const arrayofTwo = [position, position + 1];
					const rest = arrayofTwo.filter(n => n !== id);

					let tl = gsap.timeline({defaults: {overwrite: "auto"}});
					if (status.objects[toggleIndex].toggled) {
						tl.to(".nav-buttons", {display: "none"});
						tl.to(`.bkgr`, {autoAlpha: 0, width: 0, duration: 0.1});
						tl.to(`h3`, {color: "#E4E4E4", scale: 1, duration: 0.1, ease: "sine.out"}, ">");
						tl.to(`.clicked`, {autoAlpha: 0, duration: 0.1, ease: "sine.out"}, ">");
						tl.add("one")
						tl.to(`.cont-${rest[0]}`, {width: "15vw",}, "one"); 
						tl.to(`.cont-${id}`, {width: "85vw",}, "one");
						tl.to(".modal", {autoAlpha: 0.8}, "one");
						tl.to(`.cont-${id} .bkgr`, {autoAlpha: 1, width: "60%"}, ">");
						tl.to(`.cont-${id} h3`, {color: "#B66C3B", scale: 5, duration: 0.8, ease: "sine.out"}, ">+0.1");
						tl.to(`.cont-${id} .clicked`, {autoAlpha: 1, duration: 0.8, ease: "sine.out"}, ">");
					} else {
						tl.add("one");
						tl.to(`.cont-${id} .clicked`, {autoAlpha: 0,})
						tl.to(`.cont-${id} h3`, {color: "#E4E4E4", scale: 1, duration: 0.3, ease: "sine.out"}, ">");
						tl.to(`.cont-${id} .bkgr`, {autoAlpha: 0, width: 0}, ">");
						tl.to(".modal", {autoAlpha: 0.4}, "<");
						tl.to('.container', {width: "50vw",}, ">");
						tl.to(".nav-buttons", {display: "flex"})
					};

					return () => {
						tl.kill();
					}
				},
				"(min-width: 412px) and (max-width: 767px)": () => {
					let id = toggleIndex + 1;

					let tl = gsap.timeline({defaults: {overwrite: "auto"}});
					if (status.objects[toggleIndex].toggled) {
						tl.to(".nav-buttons", {display: "none"});
						tl.add("one")
						tl.to(".modal", {autoAlpha: 0.8}, "one");
						tl.to(`.cont-${id} .bkgr`, {autoAlpha: 1, width: "60%"}, ">");
						tl.to(`.cont-${id} h3`, {color: "#B66C3B", scale: 5, duration: 0.8, ease: "sine.out"}, ">+0.1");
						tl.to(`.cont-${id} .clicked`, {autoAlpha: 1, duration: 0.8, ease: "sine.out"}, ">");
					} else {
						tl.add("one");
						tl.to(`.cont-${id} .clicked`, {autoAlpha: 0,})
						tl.to(`.cont-${id} .bkgr`, {autoAlpha: 0, width: 0}, "<");
						tl.to(`.cont-${id} h3`, {color: "#E4E4E4", scale: 1, duration: 0.3, ease: "sine.out"}, ">+0.1");
						tl.to(".modal", {autoAlpha: 0.4}, ">+0.2");
						tl.to(".nav-buttons", {display: "flex"})
					};
					
					return () => {
						tl.kill();
					}
				},
				"(max-width: 411px)": () => {
					let id = toggleIndex + 1;

					let tl = gsap.timeline({defaults: {overwrite: "auto"}});
					if (status.objects[toggleIndex].toggled) {
						tl.to(".nav-buttons", {display: "none"});
						tl.add("one")
						tl.to(".modal", {autoAlpha: 0.8}, "one");
						tl.to(`.cont-${id} .bkgr`, {autoAlpha: 1, width: "60%"}, ">");
						tl.to(`.cont-${id} h3`, {color: "#B66C3B", scale: 2.5, duration: 0.8, ease: "sine.out"}, ">+0.1");
						tl.to(`.cont-${id} .clicked`, {autoAlpha: 1, duration: 0.8, ease: "sine.out"}, ">");
					} else {
						tl.add("one");
						tl.to(`.cont-${id} .clicked`, {autoAlpha: 0,})
						tl.to(`.cont-${id} .bkgr`, {autoAlpha: 0, width: 0}, "<");
						tl.to(`.cont-${id} h3`, {color: "#E4E4E4", scale: 1, duration: 0.3, ease: "sine.out"}, ">+0.1");
						tl.to(".modal", {autoAlpha: 0.4}, ">+0.2");
						tl.to(".nav-buttons", {display: "flex"})
					};
					
					return () => {
						tl.kill();
					}
				},
				"(min-width: 1921px)": () => {
					let id = toggleIndex + 1;

					const arrayofThree = position === 4 ? [4, 5, 6] : position === 5 ? [5, 6, 7] : [position, position + 1, position + 2];
					const rest = arrayofThree.filter(n => n !== id);

					let tl = gsap.timeline({defaults: {overwrite: "auto"}});
					if (status.objects[toggleIndex].toggled) {
						tl.to(".nav-buttons", {display: "none"})
						tl.to(`.bkgr`, {autoAlpha: 0, width: 0, duration: 0.1});
						tl.to(`h3`, {color: "#E4E4E4", scale: 1, duration: 0.1, ease: "sine.out"}, ">");
						tl.to(`.clicked`, {autoAlpha: 0, duration: 0.1, ease: "sine.out"}, ">");
						tl.add("one")
						tl.to(`.cont-${rest[0]}`, {width: "12rem",}, "one"); 
						tl.to(`.cont-${rest[1]}`, {width: "12rem",}, "one"); 
						tl.to(`.cont-${id}`, {width: "96rem",}, "one");
						tl.to(".modal", {autoAlpha: 0.8}, "one");
						tl.to(`.cont-${id} .bkgr`, {autoAlpha: 1, width: "57.6rem"}, ">");
						tl.to(`.cont-${id} h3`, {color: "#B66C3B", scale: 6, duration: 0.8, ease: "sine.out"}, ">+0.1");
						tl.to(`.cont-${id} .clicked`, {autoAlpha: 1, duration: 0.8, ease: "sine.out"}, ">");

					} else {
						tl.add("one");
						tl.to(`.cont-${id} .clicked`, {autoAlpha: 0});
						tl.to(`.cont-${id} h3`, {color: "#E4E4E4", scale: 1, duration: 0.3, ease: "sine.out"}, ">");
						tl.to(`.cont-${id} .bkgr`, {autoAlpha: 0, width: 0}, ">");
						tl.to(".modal", {autoAlpha: 0.4}, "<");
						tl.to('.container', {width: "40rem"}, ">");
						tl.to(".nav-buttons", {display: "flex"})
					};

					return () => {
						tl.kill();
					}
				},
			})
	},[status]);

	const CallBackActivate = (index: number):void => {
		toggleActive(index);
	}

	const handleOnClick = (x:number) => {
		ScrollTrigger.saveStyles(".container");
		ScrollTrigger.matchMedia({
			"(min-width: 1024px) and (max-width: 1920px)": () => {
			if (!isOpen) {	
			x ? position === 1 ? setPosition(5) : setPosition(position - 1) : position === 5 ? setPosition(1) : setPosition(position + 1);
			const startPanel = position === 1 ? 5 : position - 1;
			const endPanel = position <= 2 ? position + 3 : position - 2;

			let tl = gsap.timeline({
				defaults: {overwrite: "auto"},
				onStart: () => {setIsTransforming(true)},
				onComplete: () => {setIsTransforming(false)}
			});

			if (!x) {
				if (position === 5) {
					tl.to('.middles', {autoAlpha: 0}, )
					tl.set('.middles', {x: "-=66.66666666667vw"}, ">+0.1")
					tl.to('.middles', {autoAlpha: 1, duration: 0.1}, ">")
					tl.to('.ends', {autoAlpha: 0, duration: 0.1}, ">")
				}
				tl.to(".container", {x: '-=33.33333334vw'}, ">+0.1") //NEXT
				position === 1 ? tl.set(`.middle-ends`, {autoAlpha: 0}, ">+0.1") : tl.set(`.cont-${startPanel}`, {autoAlpha: 0}, ">+0.1") 
				position === 1 ? tl.set(`.middle-ends`, {x: "+=166.66666666667vw"},  ">+0.1") : position <= 4 ? tl.set(`.cont-${startPanel}`, {x: "+=233.333333334vw"},  ">+0.1") : tl.set(`.cont-${startPanel}`, {x: "+=166.66666666667vw"},  ">+0.1") 
				position === 1 ? tl.set(`.middle-ends`, {autoAlpha: 1}, ">+0.1") : tl.set(`.cont-${startPanel}`, {autoAlpha: 1}, ">+0.1") 

			} else {
				tl.to(".container", {x: '+=33.33333334vw'},) //PREV
				position === 2 ? tl.set(`.middle-ends`, {autoAlpha: 0}, ">+0.1") : tl.set(`.cont-${endPanel}`, {autoAlpha: 0}, ">+0.1")
				position === 2 ? tl.set(`.middle-ends`, {x: "-=166.66666666667vw"},  ">+0.1") : position === 1 ? tl.set(`.cont-${endPanel}`, {x: "-=166.66666666667vw"},  ">+0.1") : tl.set(`.cont-${endPanel}`, {x: "-=233.33333334vw"}, ">+0.1")
				tl.set(`.cont-${endPanel}`, {autoAlpha: 1}, ">+0.1") 

				if (position === 1) {
				tl.to('.ends', {autoAlpha: 1, duration: 0.1},)
				tl.to('.middles', {autoAlpha: 0, duration: 0.1}, ">")
				tl.set('.middles', {x: "+=66.66666666667vw"}, ">+0.1")
				}
			};
			return () => {
				tl.kill();
			}
		}

		},
		"(min-width: 768px) and (max-width: 1023px)": () => {
			if (!isOpen) {
			x ? position === 1 ? setPosition(5) : setPosition(position - 1) : position === 5 ? setPosition(1) : setPosition(position + 1);
			const startPanel = position === 1 ? 5 : position - 1;
			const endPanel = position <= 2 ? position + 3 : position - 2;

			let tl = gsap.timeline({
				defaults: {overwrite: "auto"},
				onStart: () => {setIsTransforming(true)},
				onComplete: () => {setIsTransforming(false)}
			});

			if (!x) {
				if (position === 5) {
					tl.to('.middles', {autoAlpha: 0}, )
					tl.set('.middles', {x: "-=50vw"}, ">+0.1")
					tl.to('.middles', {autoAlpha: 1, duration: 0.1}, ">")
					tl.to('.ends', {autoAlpha: 0, duration: 0.1}, ">")
				}
				tl.to(".container", {x: '-=50vw'}, ">+0.1") //NEXT
				position === 1 ? tl.set(`.middle-ends`, {autoAlpha: 0}, ">+0.1") : tl.set(`.cont-${startPanel}`, {autoAlpha: 0}, ">+0.1") 
				position === 1 ? tl.set(`.middle-ends`, {x: "+=250vw"},  ">+0.1") : position <= 4 ? tl.set(`.cont-${startPanel}`, {x: "+=300vw"},  ">+0.1") : tl.set(`.cont-${startPanel}`, {x: "+=250vw"},  ">+0.1") 
				position === 1 ? tl.set(`.middle-ends`, {autoAlpha: 1}, ">+0.1") : tl.set(`.cont-${startPanel}`, {autoAlpha: 1}, ">+0.1") 

			} else {
				tl.to(".container", {x: '+=50vw'},) //PREV
				position === 2 ? tl.set(`.middle-ends`, {autoAlpha: 0}, ">+0.1") : tl.set(`.cont-${endPanel}`, {autoAlpha: 0}, ">+0.1")
				position === 2 ? tl.set(`.middle-ends`, {x: "-=250vw"},  ">+0.1") : position === 1 ? tl.set(`.cont-${endPanel}`, {x: "-=250vw"},  ">+0.1") : tl.set(`.cont-${endPanel}`, {x: "-=300vw"}, ">+0.1")
				tl.set(`.cont-${endPanel}`, {autoAlpha: 1}, ">+0.1") 

				if (position === 1) {
				tl.to('.ends', {autoAlpha: 1, duration: 0.1},)
				tl.to('.middles', {autoAlpha: 0, duration: 0.1}, ">")
				tl.set('.middles', {x: "+=50vw"}, ">+0.1")
				}
			};
			return () => {
				tl.kill();
			}
		}
		},
		"(max-width: 767px)": () => {
			if (!isOpen) {
			x ? position === 1 ? setPosition(5) : setPosition(position - 1) : position === 5 ? setPosition(1) : setPosition(position + 1);
			const startPanel = position === 1 ? 5 : position - 1;
			const endPanel = position <= 2 ? position + 3 : position - 2;

			let tl = gsap.timeline({
				defaults: {overwrite: "auto"},
				onStart: () => {setIsTransforming(true)},
				onComplete: () => {setIsTransforming(false)}
			});

			if (!x) {
				tl.to(".container", {x: '-=100vw'},) //NEXT
				tl.set(`.cont-${startPanel}`, {autoAlpha: 0}, ">+0.1") 
				tl.set(`.cont-${startPanel}`, {x: "+=500vw"}, ">+0.1")
				tl.set(`.cont-${startPanel}`, {autoAlpha: 1}, ">+0.1") 

			} else {
				tl.to(".container", {x: '+=100vw'},) //PREVIOUS
				tl.set(`.cont-${endPanel}`, {autoAlpha: 0}, ">+0.1") 
				tl.set(`.cont-${endPanel}`, {x: "-=500vw"}, ">+0.1")
				tl.set(`.cont-${endPanel}`, {autoAlpha: 1}, ">+0.1") 
			};
			return () => {
				tl.kill();
			}
		}
		},
		"(min-width: 1921px)": () => {
			if (!isOpen) {	
			x ? position === 1 ? setPosition(5) : setPosition(position - 1) : position === 5 ? setPosition(1) : setPosition(position + 1);
			const startPanel = position === 1 ? 5 : position - 1;
			const endPanel = position <= 2 ? position + 3 : position - 2;

			let tl = gsap.timeline({
				defaults: {overwrite: "auto"},
				onStart: () => {setIsTransforming(true)},
				onComplete: () => {setIsTransforming(false)}
			});

			if (!x) {
				if (position === 5) {
					tl.to('.middles', {autoAlpha: 0}, )
					tl.set('.middles', {x: "-=80rem"}, ">+0.1")
					tl.to('.middles', {autoAlpha: 1, duration: 0.1}, ">")
					tl.to('.ends', {autoAlpha: 0, duration: 0.1}, ">")
				}
				tl.to(".container", {x: '-=40rem'}, ">+0.1") //NEXT
				position === 1 ? tl.set(`.middle-ends`, {autoAlpha: 0}, ">+0.1") : tl.set(`.cont-${startPanel}`, {autoAlpha: 0}, ">+0.1") 
				position === 1 ? tl.set(`.middle-ends`, {x: "+=200rem"},  ">+0.1") : position <= 4 ? tl.set(`.cont-${startPanel}`, {x: "+=280rem"},  ">+0.1") : tl.set(`.cont-${startPanel}`, {x: "+=200rem"},  ">+0.1") 
				position === 1 ? tl.set(`.middle-ends`, {autoAlpha: 1}, ">+0.1") : tl.set(`.cont-${startPanel}`, {autoAlpha: 1}, ">+0.1") 

			} else {
				tl.to(".container", {x: '+=40rem'},) //PREV
				position === 2 ? tl.set(`.middle-ends`, {autoAlpha: 0}, ">+0.1") : tl.set(`.cont-${endPanel}`, {autoAlpha: 0}, ">+0.1")
				position === 2 ? tl.set(`.middle-ends`, {x: "-=200rem"},  ">+0.1") : position === 1 ? tl.set(`.cont-${endPanel}`, {x: "-=200rem"},  ">+0.1") : tl.set(`.cont-${endPanel}`, {x: "-=280rem"}, ">+0.1")
				tl.set(`.cont-${endPanel}`, {autoAlpha: 1}, ">+0.1") 

				if (position === 1) {
				tl.to('.ends', {autoAlpha: 1, duration: 0.1},)
				tl.to('.middles', {autoAlpha: 0, duration: 0.1}, ">")
				tl.set('.middles', {x: "+=80rem"}, ">+0.1")
				}
			};
			return () => {
				tl.kill();
			}
		}

		},
		})
	}

	return (
	<>
		<Header />
		<main className="relative h-screen overflow-hidden w-full bg-dark">
			<div ref={sliderRef} className="hidden"></div>
			<section className="w-mobile lg:w-tablet xl:w-wider left-full lg:left-half xl:left-offset relative z-10 wrapper flex flex-wrap justify-start max:left-detailmax">
				<DetailButton to="/project/online-warriors" onClick={() => CallBackActivate(0)} bg="bg-0 bg-center" cs="cont-1 starts middles flex">
					<span className="text-light table clicked text-micro opacity-0 invisible transition-all leading-vloose">April 2021</span><span className="table leading-snuggish text-2xl xli:text-blobsm">Online</span><span className="table leading-snuggish text-2xl xli:text-blobsm">Warriors</span>
				</DetailButton>
				<DetailButton to="/project/gentse-feesten" onClick={() => CallBackActivate(1)} bg="bg-1 bg-left-4 lg:bg-lefter xli:bg-left-4" cs="cont-2 starts middles flex">
					<span className="text-light table clicked text-micro opacity-0 invisible transition-all leading-vloose">November 2020</span><span className="table leading-snuggish text-2xl xli:text-blobsm">Gentse</span><span className="table leading-snuggish text-2xl xli:text-blobsm">Feesten</span>
				</DetailButton>
				<DetailButton to="/project/codegram" onClick={() => CallBackActivate(2)} bg="bg-2 bg-left-4 lg:bg-lefter xli:bg-left-4" cs="cont-3 middles flex">
					<span className="text-light table clicked text-micro opacity-0 invisible transition-all leading-vloose">June 2021</span><span className="table leading-snuggish text-2xl xli:text-blobsm">CodeGram</span>
				</DetailButton>
				<DetailButton to="/project/osoc" onClick={() => CallBackActivate(3)} bg="bg-3 bg-center" cs="cont-4 flex">
					<span className="text-light table clicked text-micro opacity-0 invisible transition-all leading-vloose">July 2021</span><span className="table leading-snuggish text-2xl xli:text-blobsm">Osoc</span>
				</DetailButton>
				<DetailButton to="/project/arne-quinze" onClick={() => CallBackActivate(4)} bg="bg-4 bg-center" cs="cont-5 middle-ends flex">
					<span className="text-light table clicked text-micro opacity-0 invisible transition-all leading-vloose">December 2020</span><span className="table leading-snuggish text-2xl xli:text-blobsm">Arne</span><span className="table leading-snuggish text-2xl xli:text-blobsm">Quinze</span>
				</DetailButton>
				<DetailButton to="/project/online-warrior" onClick={() => CallBackActivate(5)} bg="bg-0 bg-center" cs="cont-6 ends middle-ends hidden lg:flex">
					<span className="text-light table clicked text-micro opacity-0 invisible transition-all leading-vloose">April 2021</span><span className="table leading-snuggish text-2xl xli:text-blobsm">Online</span><span className="table leading-snuggish text-2xl xli:text-blobsm">Warriors</span>
				</DetailButton>
				<DetailButton to="/project/arne-quinze" onClick={() => CallBackActivate(6)} bg="bg-1 bg-left-4 lg:bg-lefter xli:bg-left-4" cs="cont-7 ends middle-ends hidden xl:flex">
					<span className="text-light table clicked text-micro opacity-0 invisible transition-all leading-vloose">November 2020</span><span className="table leading-snuggish text-2xl xli:text-blobsm">Gentse</span><span className="table leading-snuggish text-2xl xli:text-blobsm">Feesten</span>
				</DetailButton>
			</section>
			<div className="font-josefine nav-buttons text-center text-xs sticky z-50 w-full px-6 bottom-detailnav left-0 flex flex-wrap justify-between">
				<button className="transition-all p-2 border border-transparent rounded-full hover:border-gold duration-200" disabled={isTransforming} onClick={() => handleOnClick(1)}>PREVIOUS</button>
				<button className="transition-all py-2 px-4 border border-transparent rounded-full hover:border-gold duration-200" disabled={isTransforming} onClick={() => handleOnClick(0)}>NEXT</button>
			</div>
		</main>
	</>
	)
}
