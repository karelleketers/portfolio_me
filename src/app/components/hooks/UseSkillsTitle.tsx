import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useSkillsTitle = (title: string, text: string, trigger: string,) => {
    useEffect(() => {
        gsap.set(title, {y: 150, autoAlpha: 0})
		gsap.set(text, {y: 150, autoAlpha: 0})

		const tl = gsap.timeline({defaults: {ease: "power4.out"}, scrollTrigger: {
			trigger: trigger,
			start: "bottom bottom",
			end: "bottom 30%",
			toggleActions: "restart none none reverse"
		}})

		tl.to(title, {y: 0, autoAlpha: 1, duration: 0.8});
		tl.to(text, {y: 0, autoAlpha: 1, duration: 0.65}, ">-0.15");
    })
}