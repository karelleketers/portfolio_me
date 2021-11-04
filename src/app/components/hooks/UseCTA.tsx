import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useCTA = (obj1: string, obj2: string, obj3: string, trigger1: string, trigger2: string) => {  
    useEffect(() => {
        gsap.set(obj1, {
            autoAlpha: 0,
            y: 200
        });
        gsap.set(obj2, {
            autoAlpha: 0,
            y: 200
        });
        gsap.set(obj3, {
            autoAlpha: 0
        })
        gsap.to(obj1, {
            autoAlpha: 1,
            y: 0,
            ease: "power1",
            duration: 1,
            scrollTrigger: {
                trigger: trigger1,
                start: "start center",
            }
        })
        gsap.to(obj2, {
            autoAlpha: 1,
            y: 0,
            ease: "power1",
            duration: 1,
            scrollTrigger: {
                trigger: trigger2,
                start: "start center",
            }
        })

        gsap.to(obj3, {
            autoAlpha: 1,
            delay: 1,
            ease: "power1",
            stagger: 1,
            scrollTrigger: {
                trigger: trigger2,
                start: "start center",

            }
        })

    })
}