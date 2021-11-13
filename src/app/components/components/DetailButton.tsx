import React from 'react'
import { Link } from 'react-router-dom';


interface DetailButtonProps {
    children: React.ReactNode
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
	to: string
	cs?: string
	bg?: string
}

export const DetailButton = ({ children, onClick, to, cs, bg}: DetailButtonProps) => {
	return (
		<button type="button" onClick={onClick} className={`${cs} group container w-complete lg:w-half xl:w-detw transition-all relative flex-wrap justify-center items-center h-screen overflow-hidden max-w-none max:max-w-detail`}>
				<div className={`${bg} bg-cover transition-all group-hover:scale-110 w-full transform h-screen absolute top-0 left-0 duration-500 z-10`}></div>
				<div className="relative w-full h-screen z-50 text-center duration-300 flex flex-wrap items-end">
					<div className="relative z-40 w-full flex mt-16">
						<h3 className="mx-auto transition-all relative">{children}</h3>
					</div>
					<div className="relative z-40 w-full mb-16">
						<Link  to={to} className="m-auto block clicked w-12/25 xs:w-2/5 max-w-button lg:max-w-solobttn opacity-0 invisible transition-all">
							<button className="shadow-lg text-center leading-none text-smaller lg:text-xl w-full font-josefine rounded-full border border-gold py-4 lg:py-6 hover:border-light hover:text-gold duration-200">VIEW PROJECT</button>
						</Link>
					</div>		
					<div className="absolute bkgr h-screen w-0 z-30 bg-dark"></div>		
				</div>
				<div className="w-full modal h-screen bg-dark opacity-40 absolute left-0 top-0 z-20 "></div>
		</button>
	)
}