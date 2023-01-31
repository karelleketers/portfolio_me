import React from 'react'
import logo from './../../../assets/img/logo-lg.png';
import { Link } from 'react-router-dom';
import { Header } from '../../layout';

export const NotFound = () => {
    return (
        <>
        <Header />
        <section className="bg-dark h-screen w-full flex flex-wrap py-8 xli:py-12">
            <div className="py-8 xli:py-12 w-full h-blobdeth flex flex-wrap justify-center items-center">
                <img src={logo} className="h-full max-h-logolg xl:max-h-none w-auto" alt="logo" />
            </div>
            <div className="text-center w-1/2 m-auto">
                <p className="font-reg text-gold text-4xl leading-tight lg:text-6xl">Oops ... Are you sure you wanted to go here?</p>
                <Link  to={"/"} className="relative w-full font-josefine nav-buttons text-xs flex flex-wrap justify-center">
                     <button className="my-4 transition-all p-2 border border-transparent rounded-full hover:border-gold duration-200">GO BACK</button>
                </Link>
            </div>
        </section>
        </>
    )
}