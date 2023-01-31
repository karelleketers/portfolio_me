import React from 'react';
import gsap from 'gsap';
import { NavLink } from 'react-router-dom';
import lift from './../../assets/figures/lift.svg';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const Modal = () => {
    const handleOnClick = () => {
        ScrollTrigger.matchMedia({
            "(min-width: 768px)": () => {
                let tl = gsap.timeline();
                tl.to(".nav-li", {
                    autoAlpha: 0,
                    y: 100,
                    stagger: 0.3,
                },)
                tl.to(".lift", {yPercent: -60, autoAlpha: 0});
                tl.set("body", {overflow: "auto"}, ">");
                tl.to(".nav-modal", {autoAlpha: 0}, ">");
                tl.set(".nav-modal", {display: "none"}, ">")
            },
            "(max-width: 767px)": () => {
                let tl = gsap.timeline();
                tl.to(".nav-li", {
                    autoAlpha: 0,
                    y: 100,
                    stagger: 0.3,
                },)
                tl.to(".lift", {y: "-30vh",});
                tl.set("body", {overflow: "auto"}, ">");
                tl.to(".nav-modal", {autoAlpha: 0}, ">");
                tl.set(".nav-modal", {display: "none"}, ">")
            },
        })
    };

    return (
        <div className="overscroll-none hidden transition-all bg-opacity-90 nav-modal z-300 w-screen h-screen bg-dark top-0 left-0 pr-6 pt-10 fixed">
            <div className="m-auto max-w-120 relative w-full h-full flex flex-wrap">
                <div className="relative z-400 h-liftsm xl:h-auto w-full flex flex-wrap justify-end items-start flex-0">  
                    <button onClick={handleOnClick} className="text-shadow text-smallest font-mendbold tracking-widest leading-4">
                        <ul className="">
                            <li>EXIT</li>
                            <li>ELEV</li>
                            <li>ATOR</li>
                        </ul>
                    </button>
                </div>
                <div className="h-full flex-1 flex justify-center flex-wrap">
                    <div className="h-full flex flex-wrap items-center">
                        <ul className="text-center xl:text-left xl:flex-1 nav-list flex flex-col xl:flex-wrap xl:flex-row justify-center items-center">
                            <NavLink to="/" onClick={handleOnClick} preventScrollReset={true} className="w-4/5 my-4 mx-6 md:my-6 xl:my-8 overflow-hidden">
                                <li className="nav-li inline-block  hover:animate-fade-in hover:text-gold transition-all text-2xl xli:text-6xl duration-300">Home</li>
                            </NavLink>
                            <NavLink to="/projects" className="w-4/5 mx-6 my-4 md:my-6 xl:my-8 overflow-hidden">
                                <li onClick={handleOnClick} className="inline-block text-2xl xli:text-6xl nav-li hover:animate-fade-in hover:text-gold transition-all duration-300">Projects</li>
                            </NavLink>
                            <NavLink to="/connect" className="w-4/5 mx-6 my-4 md:my-6 xl:my-8 overflow-hidden">
                                <li onClick={handleOnClick} className="text-2xl nav-li xli:text-6xl inline-block hover:text-gold hover:animate-fade-in transition-all duration-300">Connect</li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className="h-liftsm absolute -top-6 left-0 xl:relative xl:m-0 lift transform xl:h-screen max-h-liftsm xl:max-h-lift ">
                        <img src={lift} alt="lift" className="h-full w-auto" />
                    </div>
                </div>
            </div>
        </div>
    ) 
}
