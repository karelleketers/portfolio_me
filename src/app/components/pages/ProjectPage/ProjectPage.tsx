import React, { useEffect } from 'react';
import blob from './../../../assets/figures/blob-3.svg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Link, useParams } from 'react-router-dom';
import { useCTA } from '../../hooks';
import data from './../../../data/projects.json'
import { Header } from './../../layout'

gsap.registerPlugin(ScrollTrigger);

export const Project = () => {
    const { id }: {id?: string} = useParams();
    const project = data[id as keyof typeof data]
    useEffect(() => {
        ScrollTrigger.matchMedia({
            "(min-width: 1024px)": () => {
                let tl = gsap.timeline({defaults: {ease: "sine.out", duration: 0.7}})
                tl.set(".mockup", {y: "110vh", autoAlpha: 0});
                tl.set(".title", {autoAlpha: 0}, "<")
                tl.to(".title", {autoAlpha: 1},">+0.5")
                tl.to(".mockup", {y: "0vh", autoAlpha: 1, duration: 2}, ">");
            },
            "(max-width: 1023px)": () => {
                let tl = gsap.timeline({defaults: {ease: "sine.out", duration: 0.7}})
                tl.set(".mockup", {yPercent: -200, autoAlpha: 0});
                tl.set(".title", {autoAlpha: 0}, "<")
                tl.to(".title", {autoAlpha: 1},">+0.5")
                tl.to(".mockup", {yPercent: 0, autoAlpha: 1, duration: 2}, ">");
            },
        });

        gsap.set(".blobber", {
            x: "100vw",
        });

        gsap.to(".blobber", {x: "0vw", duration: 1, ease: "power2.out", scrollTrigger: {
            trigger: ".blobber", 
            start: "center bottom",
        }});

    }, []);

    useCTA(".projtit", ".projtext", ".rest", ".projcont", ".projcont");

    const spinElement = (e: React.MouseEvent<HTMLButtonElement>):void => {
        gsap.to(e.currentTarget, {rotate: "+=180deg", duration: 0.8, ease:"none"});
    };

    return (
        <>
            <Header />
            <main className="bg-light text-dark w-screen overflow-hidden max-w-120 min-h-screen">
                <section className="mt-6 lg:mt-12 xli:mt-16 relative mx-4 sm:mx-6 md:mx-9 flex flex-wrap justify-center">
                    <h1 className="title w-full text-intermezzo547lg xs:text-7xl int:text-8xl lg:text-detailsm xl:text-detailmd text-dark text-opacity-40 xli:text-massive 2xl:text-extralg leading-none flex flex-col text-center">
                            <p className="spanners">{project.h1}</p>
                            <p className="spanners">{project.h1_sub}</p>
                    </h1>
                    <div className=" w-phonesm lg:w-phones absolute left-4 xs:left-8 lg:left-1/2 top-4/5 lg:top-1/2 mockup max-w-3xl">
                        <img src={project.phones} alt="phone mockup" className="w-full filter drop-shadow-lg" />
                    </div>
                </section>
                <section className="mt-detcont lg:mt-0 ml-4 lg:gap-x-6 xli:gap-x-8 sm:ml-6 md:ml-8 xli:ml-12 grid grid-cols-1 grid-rows-3 lg:grid-cols-2">
                    <div className="row-span-2 col-span-1 lg:row-span-3 pr-4 sm:pr-6 md:pr-8 lg:pr-0 projcont mt-tools-contsm int:mt-tools-contmd xli:mt-tools-contlg max:mt-tools-contmd w-full flex flex-wrap max-w-detail-cont">
                        <div className="mx-6 md:mx-8 xli:mx-12">
                            <div className="overflow-hidden mb-4 xli:mb-6 w-full">
                                <h2 className="leading-tight projtit text-gold font-reg text-titlesmall md:text-detailh2md xl:text-detailsub w-full">The Briefing</h2>
                            </div>
                            <div className="overflow-hidden w-full">
                                <p className="projtit font-light text-dark text-xs md:text-sm lg:text-base text-opacity-40">{project.date}</p>
                            </div>
                            <div className="overflow-hidden w-full mt-4 mb-6 md:mb-8 xli:mb-12">
                                <p className="text-dark w-full projtext font-mendlight leading-normal md:text-lg lg:text-small xl:text-2xl">
                                    {project.text_upper}
                                    <br/>
                                    <br/>
                                    {project.text_lower}
                                </p>
                            </div>
                        </div>
                        <div className="rest flex mx-6 md:mx-8 xli:mx-12 flex-wrap w-full justify-end">
                            <a href={project.website_link} target="_blank" rel="noopener noreferrer" className="my-2 mx-4">
                                <svg id="noun_website_3977699" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="duration-200 text-gold fill-current hover:fill-dark w-8">
                                    <path id="Path_296" data-name="Path 296" d="M12,0A12,12,0,1,0,24,12,12.012,12.012,0,0,0,12,0Zm9.223,7.2H16.566a19.578,19.578,0,0,0-.841-3.385,10.522,10.522,0,0,0-.824-1.8A10.392,10.392,0,0,1,21.223,7.2ZM15.342,12a29.058,29.058,0,0,1-.19,3.2H9.137a29.058,29.058,0,0,1-.19-3.2,28.892,28.892,0,0,1,.19-3.2h6.014A28.711,28.711,0,0,1,15.342,12ZM11.2,2.2A1.35,1.35,0,0,1,12.1,1.6c.037,0,.072.005.108.006a1.4,1.4,0,0,1,.88.586A7.2,7.2,0,0,1,14.22,4.351,17.666,17.666,0,0,1,14.939,7.2H9.348a17.742,17.742,0,0,1,.72-2.847A7.26,7.26,0,0,1,11.2,2.2ZM9.437,1.93a10.352,10.352,0,0,0-.875,1.885A19.63,19.63,0,0,0,7.721,7.2H2.775A10.382,10.382,0,0,1,9.437,1.93ZM1.6,12a10.427,10.427,0,0,1,.5-3.2h5.4a31.706,31.706,0,0,0,0,6.4H2.1A10.418,10.418,0,0,1,1.6,12Zm1.177,4.8H7.722a19.616,19.616,0,0,0,.841,3.389,10.2,10.2,0,0,0,.875,1.88A10.387,10.387,0,0,1,2.776,16.8Zm10.315,5a1.4,1.4,0,0,1-.873.584c-.039,0-.076.006-.114.006A1.345,1.345,0,0,1,11.2,21.8a7.179,7.179,0,0,1-1.128-2.15A17.735,17.735,0,0,1,9.348,16.8h5.594a17.66,17.66,0,0,1-.721,2.852A7.184,7.184,0,0,1,13.092,21.8Zm1.811.18a10.5,10.5,0,0,0,.822-1.792,19.612,19.612,0,0,0,.842-3.389h4.654A10.393,10.393,0,0,1,14.9,21.983ZM16.78,15.2a31.251,31.251,0,0,0,.163-3.2,31.27,31.27,0,0,0-.163-3.2h5.113a10.4,10.4,0,0,1,0,6.4Z" fill=""/>
                                </svg>
                            </a>
                            <a href={project.git_repo}  target="_blank" rel="noopener noreferrer" className="my-2">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="25" height="24" viewBox="0 0 25 24 " className="duration-200 text-gold fill-current hover:fill-dark w-8">
                                    <defs>
                                        <clipPath id="clip-path">
                                            <rect id="Rectangle_30" data-name="Rectangle 30" width="25" height="24" transform="translate(0 -0.001)" fill="none"/>
                                        </clipPath>
                                    </defs>
                                    <g id="Layer_2" data-name="Layer 2" transform="translate(0.54 0.771)">
                                        <g id="Layer_1" data-name="Layer 1" transform="translate(-0.54 -0.769)">
                                            <g id="Group_115" data-name="Group 115" transform="translate(0 0)" clip-path="url(#clip-path)">
                                                <path id="Path_289" data-name="Path 289" d="M.749,11.192a11.97,11.97,0,0,0,8.49,13.59,1.95,1.95,0,0,0,.35.033,1.335,1.335,0,0,0,1.379-1.358c-.1-.547.4-2.761-.961-2.463-2.632.56-2.948-.91-3.349-1.679a3.318,3.318,0,0,0,4.126.856c.714-.313.341-1.11.68-1.4a.784.784,0,0,0-.426-1.371c-2.416-.266-4.657-1.045-4.657-4.913,0-2.265,1.573-2.469,1.139-3.416a3.058,3.058,0,0,1-.047-1.932c1.482.274,2.165,1.337,2.873,1.146a10.536,10.536,0,0,1,5.465,0c.735.2,1.261-.837,2.861-1.153.457,1.729-.494,2.151.107,2.8a3.64,3.64,0,0,1,1,2.557c0,5.812-4.929,4.135-5.33,5.454a.784.784,0,0,0,.246.827c.637.536.554,1.912.486,3.018-.07,1.147-.131,2.137.5,2.7a1.448,1.448,0,0,0,1.341.261,11.9,11.9,0,0,0,8.425-13.5C23.255-2.724,2.952-2.707.749,11.192ZM9.387,22.66l0,.528a12.353,12.353,0,0,1-1.541-.653,4.825,4.825,0,0,0,1.537.125Zm.386-3.866-.016.084a1.63,1.63,0,0,1-2.045-.784,7.27,7.27,0,0,0,2.061.7ZM13.092,2.35c12.365,0,15.151,17,3.625,20.836a9.409,9.409,0,0,1,.022-1.306,7.931,7.931,0,0,0-.223-3.118c5.317-1.107,5.761-6.945,3.714-9.546.253-.995.152-3.331-.762-3.618-.215-.065-1.364-.318-3.592,1.083a12.18,12.18,0,0,0-5.6,0c-1.11-.7-3.617-1.829-4.1-.627A5.066,5.066,0,0,0,5.915,9.22a6.476,6.476,0,0,0,.558,7.967c-1.038-.5-2.467-.665-2.776.327-.336,1.084.955.953,1.757,2.93a2.757,2.757,0,0,0,.434.824C-1.228,15.453,2.206,2.35,13.092,2.35Z" transform="translate(-0.553 -0.718)" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </a> 
                        </div>
                        <div className="rest w-full py-6 flex flex-wrap justify-end">
                            <button onMouseEnter={spinElement} className="mx-2 w-16 xs:w-20 transition-all cursor-default">
                                <img src={project.skill_one} alt="skill" className="w-full" />
                            </button>
                            <button onMouseEnter={spinElement} className="mx-2 w-16 xs:w-20  transition-all cursor-default">
                                <img src={project.skill_two} alt="skill" className="w-full"/>
                            </button>
                            <button onMouseEnter={spinElement} className="mx-2 w-16 xs:w-20  transition-all cursor-default">
                                <img src={project.skill_three} alt="skill" className="w-full"/>
                            </button>
                        </div>
                        <section className="w-full hidden lg:block">
                            <Link  to={"/projects"} className="relative w-full mb-6 font-josefine nav-buttons text-xs flex flex-wrap flex-start">
                                <button className="transition-all p-2 border border-transparent rounded-full hover:border-gold duration-200">GO BACK</button>
                            </Link>
                        </section>
                    </div>
                    <div className="row-span-1 row-start-3 lg:row-span-2 lg-row-start-2 col-span-1 lg:col-start-2 lg:row-start-2 blobber flex-1 max-w-detail-blob">
                        <div className="w-full relative h-full flex flex-wrap items-end lg:block">
                            <div className="absolute top-0 left-tenner lg:left-0 z-10 h-full w-over xl:w-overlg xli:w-phonesm xli:max-w-detail-blobxl">
                                <img src={blob} alt="blob" className="h-full w-auto xs:h-auto xs:w-overlg int:w-full max-w-none"/>
                            </div>
                            <section className="w-full lg:hidden">
                                <Link  to={"/projects"} className="relative w-full my-6 font-josefine nav-buttons text-xs flex flex-wrap flex-start">
                                    <button className="transition-all p-2 border border-transparent rounded-full hover:border-gold duration-200">GO BACK</button>
                                </Link>
                            </section>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
