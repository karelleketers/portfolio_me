import React from 'react';
import logo from './../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export const Header = () => {
    const handleOnClick = () => {
        ScrollTrigger.matchMedia({
            "(min-width: 800px)": () => {
                let tl = gsap.timeline();
                tl.set(".lift", {yPercent: -60, autoAlpha: 0})
                tl.set(".nav-li", {autoAlpha: 0, y: 100});
                tl.set(".nav-modal", {autoAlpha: 0},);
                tl.set(".nav-modal", {display: "block"}, ">");
                tl.set("body", {overflow: "hidden"}, ">");
                tl.to(".nav-modal", {autoAlpha: 1, ease:"power1.inOut"}, ">");
                tl.to(".lift", {yPercent: -10, autoAlpha: 1, rotation: 0.001, ease: "none", duration: 1.5})
                tl.to(".nav-li", {
                    autoAlpha: 1,
                    y: 0,
                    stagger: 0.3,
                }, ">+0.3");
            },
            "(max-width: 799px)": () => {
                let tl = gsap.timeline();
                tl.set(".lift", {y: "-30vh"})
                tl.set(".nav-li", {autoAlpha: 0, y: 100});
                tl.set(".nav-modal", {autoAlpha: 0},);
                tl.set(".nav-modal", {display: "block"}, ">");
                tl.set("body", {overflow: "hidden"}, ">");
                tl.to(".nav-modal", {autoAlpha: 1, ease:"power1.inOut"}, ">");
                tl.to(".lift", {y: 0, rotation: 0.001, ease: "none", duration: 1.5})
                tl.to(".nav-li", {
                    autoAlpha: 1,
                    y: 0,
                    stagger: 0.3,
                }, ">+0.3");
            },
        })
    }

	return (
    <header className="nav p-6 border-box flex flex-wrap w-screen max-w-120 justify-between fixed z-100 items-center bg-light bg-opacity-0">
        <Link to="/">
            <img src={logo} className="w-12" alt="logo" />
        </Link>
        <button onClick={handleOnClick} className="text-shadow subpixel-antialiased text-smallest font-mendbold tracking-widest leading-4">
            <ul>
                <li>CALL</li>
                <li>ELEV</li>
                <li>ATOR</li>
            </ul>
        </button>
    </header>
    )
}

