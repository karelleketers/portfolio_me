import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useHeroBlob = (obj1: string, obj2: string, trigger: string) => {
    useEffect(() => {
        gsap.set(obj1, {
            x: "150vw",
        });

        gsap.set(obj2, {
            autoAlpha: 0
        });

        let tl = gsap.timeline({defaults: {ease: "power2.out"}, scrollTrigger: {
            trigger: trigger, 
            start: "start center",
            end: "bottom center",
            toggleActions: "restart reverse restart reverse",
        }});

        tl.to(obj1, {x: "0vw", duration: 1});
        tl.to(obj2, {autoAlpha: 1, duration: 0.65});

    })
}