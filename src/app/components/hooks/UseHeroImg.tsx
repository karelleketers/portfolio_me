import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useHeroImg = (obj: string):void => {
    useEffect(() => {
        gsap.to(obj, {
            yPercent: "-80",
            scrollTrigger: {
                trigger: obj,
                start: "40% center",
                scrub: true,
            }
        })
    })
}