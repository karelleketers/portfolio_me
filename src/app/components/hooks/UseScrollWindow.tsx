import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const useScrollWindow = (obj: string, trigger: string) => {
    useEffect(() => {
        gsap.to(window, {
            duration: 2,
            scrollTo: {
                y: obj,
                autoKill: false
            },
            scrollTrigger: {
                trigger: trigger,
                start: "top+=5px top",
            }
        })

    })
}