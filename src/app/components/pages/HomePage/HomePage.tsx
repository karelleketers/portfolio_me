import React from 'react';
import { Hero } from './HeroSection';
import { Skills } from './Skills'
import { CTA } from './CTA';

export const Home = () => (
	<main className="bg-dark overflow-hidden">
		<Hero />
		<Skills />
		<CTA />
	</main>
)