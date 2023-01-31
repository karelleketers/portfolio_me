import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useTitleSection = (title: string, text: string, trigger: string) => {
    useEffect(() => {
        gsap.set(title, {
            y: "50vh",
        })

        gsap.set(text, {
            y: "50vh", 
            autoAlpha: 0
        })
        
        ScrollTrigger.create({
            trigger: trigger,
            start: "60% center",
            end: "60% center",
            onEnter: () => {gsap.to(title, {
                y: "0vh",
                duration: 1,
                ease: "circ",
                overwrite: true,
            })},
        })
        
        ScrollTrigger.create({
            trigger: trigger,
            start: "60% center",
            end: "60% center",
            onEnter: () => {gsap.to(text, {
                y: "0vh",
                delay: 1,
                stagger: 0.65,
                ease: "circ",
                autoAlpha: 1,
                overwrite: true,
            })},
        })


    })
}