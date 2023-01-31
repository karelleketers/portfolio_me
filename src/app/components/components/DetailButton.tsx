import React from 'react'
import { Link } from 'react-router-dom';


interface DetailButtonProps {
    children: React.ReactNode
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
	to: string
	open: boolean
	bg?: string
}

export const DetailButton = ({ children, onClick, to, open, bg}: DetailButtonProps) => {
	return (
		<button type="button" onClick={onClick} className="group transition-all w-full relative flex flex-wrap justify-center items-center h-screen overflow-hidden">
				<div className={`${bg} bg-center bg-cover transition-all group-hover:scale-110 w-full transform h-screen absolute top-0 left-0 duration-500 z-10`}></div>
				<div className="relative w-full h-screen z-50 text-center duration-300 flex flex-wrap items-end">
					<div className="relative z-40 w-full flex mt-16">
						<h3 className="mx-auto transition-all relative">{children}</h3>
					</div>
					<div className="relative z-40 w-full mb-24">
						<Link to={to} className={`m-auto block w-12/25 xs:w-2/5 max-w-button lg:max-w-solobttn ${open ? "opacity-1 delay-300 duration-500" : "opacity-0"} transition-all`}>
							<button className="shadow-lg text-center leading-none text-smaller lg:text-xl w-full font-josefine rounded-full border border-gold py-4 lg:py-6 hover:border-light hover:text-gold duration-200">VIEW PROJECT</button>
						</Link>
					</div>		
					<div className={`absolute h-screen ${open ? "w-70 duration-500" : "w-0 duration-200"} z-30 bg-dark`}></div>		
				</div>
				<div className={`w-full ${open ? "opacity-80" : "opacity-40"} h-screen bg-dark absolute left-0 top-0 z-20`}></div>
		</button>
	)
}