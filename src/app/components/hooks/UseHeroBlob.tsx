import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const useHeroBlob = (obj1: string, obj2: string) => {
    useEffect(() => {
        gsap.set(obj1, {
            x: "100vw",
        });

        gsap.set(obj2, {
            autoAlpha: 0
        });

        let tl = gsap.timeline({defaults: {ease: "power2.out"}, scrollTrigger: {
            trigger: obj1, 
            start: "20% center",
            end: "90% center",
            toggleActions: "play reverse play reverse",
        }});

        tl.to(obj1, {x: "0vw", duration: 1});
        tl.to(obj2, {autoAlpha: 1, duration: 0.65});

    })
}