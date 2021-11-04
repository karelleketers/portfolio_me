import React from 'react';
import logo from './../../../assets/img/logo.png';
import { Navigation } from './Navigation';
import { Link } from 'react-router-dom';

/* type HeaderProps = {
	logo: string
} */

export const Header = () => (
	<header className="invisible p-6 border-box flex flex-wrap w-screen justify-between fixed z-10 items-center bg-light bg-opacity-0 backdrop-blur-md">
        <Link to="/">
            <img src={logo} className="w-6" alt="logo" />
        </Link>
        <Navigation />
    </header>
)

