import React from 'react';
import logo from './../../../assets/img/logo.png';
import { Navigation } from './Navigation';
import { Link } from 'react-router-dom';

/* type HeaderProps = {
	logo: string
} */

export const Header = () => (
	<header className="flex flex-wrap w-full justify-between items-center border bg-transparent fixed border-pink-200">
        <Link to="/">
            <img src={logo} className="w-6 m-4" alt="logo" />
        </Link>
        <Navigation />
    </header>
)

