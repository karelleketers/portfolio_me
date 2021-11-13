import React from 'react';
import { Hero } from './HeroSection';
import { Skills } from './Skills'
import { CTA } from './CTA';
import { Header } from '../../layout';

export const Home = () => {
	return (
	<>
	<Header />
	<main className="bg-dark overflow-hidden">
		<Hero />
		<Skills />
		<CTA />
	</main>
	</>
	)
}