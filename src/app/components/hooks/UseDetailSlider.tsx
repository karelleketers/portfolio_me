import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useDetailSlider = (trigger: string, panels: string) => {
    useEffect(() => {

        let sections = gsap.utils.toArray(panels); 
        gsap.to(sections, {
            xPercent: -400,
            ease: "none",
            scrollTrigger: {
                trigger: trigger,
                pin: true,
                scrub: 1,
                end: "+=10",
                markers: true
            }
        })

    })
}