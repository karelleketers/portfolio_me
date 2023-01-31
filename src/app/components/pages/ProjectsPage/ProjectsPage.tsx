import { useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Draggable from 'gsap/Draggable';
import { DetailButton } from '../../components';
import { Header } from '../../layout';
import { useWindowDimensions } from '../../hooks';
import { motion, AnimatePresence } from "framer-motion"

gsap.registerPlugin(ScrollTrigger, Draggable);


export const Projects = () => {
    const { width } = useWindowDimensions();
	const [isTransforming, setIsTransforming] = useState(false);
	const [position, setPosition] = useState(0);
	const [currentClick, setCurrentClick] = useState(0);
	const [projSequence, setProjSequence] = useState([1, 2, 3]);
	const [openProject, setOpenProject] = useState<null | number>(null);
	const [projects, setProjects] = useState([
		{i: 0, name: "Online", span: "Warriors", date: "April 2021", bg: "bg-online-warriors", link: "online-warriors"},
		{i: 1, name: "Gentse", span: "Feesten", date: "November 2020", bg: "bg-gentse-feesten", link: "gentse-feesten"},
		{i: 2, name: "Ledger", date: "November 2021", bg: "bg-ledger", link: "ledger"}, 
		{i: 3, name: "CodeGram", date: "June 2021", bg: "bg-codegram", link: "codegram"}, 
		{i: 4, name: "Osoc", date: "July 2021", bg: "bg-osoc", link: "osoc"}, 
		{i: 5, name: "Arne", span: "Quinze", date: "December 2020", bg: "bg-arne-quinze",  link: "arne-quinze"}
	]);

	const handleOnClick = (x: number) => {
		setOpenProject(null)
		setCurrentClick(x);
		handleNewPosition(x);
		let projectsList = projects;
		//@ts-ignore
		x < 0 && projectsList.push(projectsList.shift());
		//@ts-ignore
		x > 0 && projectsList.unshift(projectsList.pop());
		setProjects(projectsList);
		getProjectSequence();
	}

	const handleNewPosition = (x: number) => {
		const newPos = position + x;
		const intPos = newPos < 0 ? (newPos + 6)%6 : (newPos)%6;
		setPosition(intPos);
	}

	const handleOpen = (proj: number) => {
		(proj !== openProject) && setOpenProject(proj);
		(proj === openProject) && setOpenProject(null)
	}

	const getProjectSequence = () => {
		width >= 1024 && setProjSequence([projects[1].i, projects[2].i, projects[3].i]);
		width >= 547 && setProjSequence([projects[1].i, projects[2].i]);
		width < 547 && setProjSequence([]);
	}
	
	return (
	<>
		<Header />
		<main className="relative h-screen overflow-hidden w-full bg-dark">
			<ul className="w-6vw md:w-tablet xl:w-double translate-x-neg-1/6 relative flex flex-wrap h-screen transition-all duration-500">
				<AnimatePresence>
				{projects.map((project: any, index) => 
				 (<motion.li transition={{ type: "spring", stiffness: 500, damping: 100, delay: 0.2 }} layout key={project.name} className={`transition-width duration-300 w-1/6 ${project.i === openProject ? "md:w-1/4 xl:w-1/3" : (openProject !== null && projSequence.includes(project.i)) ? "md:w-1/12" : ""} ${(index === 0 && currentClick > 0) ? "z-0" : (index === 5 && currentClick < 0) ? "z-0": "z-100"}`}>
					<DetailButton to={`/project/${project.link}`} onClick={() => handleOpen(project.i)} bg={project.bg} open={project.i === openProject}>
						<span className={`text-light table ${project.i === openProject ? "opacity-1 text-xs md:text-xl" : "opacity-0 text-micro"} transition-all duration-300 leading-vloose`}>{project.date}</span>
						<span className={`table leading-snuggish transition-all duration-300 ${project.i === openProject ? "text-6xl xs:text-7xl lg:text-8xl xli:text-9xl text-gold delay-200" : "text-2xl xli:text-blobsm"}`}>{project.name}</span>
						{project.span && <span className={`table leading-snuggish transition-all duration-300 ${project.i === openProject ? "text-6xl xs:text-7xl lg:text-8xl xli:text-9xl text-gold delay-200" : "text-2xl xli:text-blobsm"}`}>{project.span}</span>}
					</DetailButton>
					</motion.li>)
				)}
				</AnimatePresence>
			</ul>
			<div className="font-josefine text-center text-xs sticky z-200 w-full px-6 bottom-detailnav left-0 flex flex-wrap justify-between">
				<button className="transition-all p-2 border border-transparent rounded-full hover:border-gold duration-200" disabled={isTransforming} onClick={() => handleOnClick(1)}>PREVIOUS</button>
				<button className="transition-all py-2 px-4 border border-transparent rounded-full hover:border-gold duration-200" disabled={isTransforming} onClick={() => handleOnClick(-1)}>NEXT</button>
			</div>
		</main>
	</>
	)
}
