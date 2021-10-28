import React from 'react';
import { Link } from 'react-router-dom'

export const Navigation = () => (
	<nav className="">
        {/* eslint-disable-next-line */}
        {/*<ul role="list" className="flex flex-wrap gap-x-4 items-center text-2xl">
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/projects">
                <li>Projects</li>
            </Link>
            <Link to="/connect">
                <li>Connect</li>
            </Link>
</ul> */}
        <button className="text-smallest font-mendbold font-bold tracking-widest leading-4">
            <ul>
                <li>CALL</li>
                <li>ELEV</li>
                <li>ATOR</li>
            </ul>
        </button>
    </nav>
)
