import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useSkillBlob = (obj: string, trigger: string) => {
    useEffect(() => {
        gsap.set(obj, {
            autoAlpha: 1,
            y: -500
        })
        gsap.to(obj, {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power1.out",
            scrollTrigger: {
                trigger: trigger,
                start: "30% center",
                end: "bottom+=30% start",
                toggleActions: "play none none reverse"
            }
        })

    })
}