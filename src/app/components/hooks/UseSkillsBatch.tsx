import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useSkillsBatch = (obj: string) => {
    useEffect(() => {
        gsap.set(obj, {
            opacity: 0,
            yPercent: 50
        });

        ScrollTrigger.batch(obj, {
            start: "20% bottom",
            end: "bottom top",
            onEnter: batch =>
                gsap.to(batch, {
                    opacity: 1,
                    yPercent: 0,
                    ease: "back.out(1.4)",
                    stagger: 0.15,
                    overwrite: true,
                }),
            onLeave: batch =>
                gsap.set(batch, {
                    opacity: 0,
                    yPercent: -50,
                    overwrite: true,
                }),

            onEnterBack: batch =>
                gsap.to(batch, {
                    opacity: 1,
                    yPercent: 0,
                    stagger: 0.15,
                    overwrite: true,
                    ease: "back.out(1.4)",
                }),
            onLeaveBack: batch =>
                gsap.set(batch, {
                    opacity: 0,
                    yPercent: 50,
                    overwrite: true,
                }),
        });

    })
}