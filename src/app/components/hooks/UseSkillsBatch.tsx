import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useSkillsBatch = (obj: string) => {
    useEffect(() => {
        gsap.set(obj, {
            autoAlpha: 0,
            y: 120
        });

        ScrollTrigger.batch(obj, {
            start: "20% bottom",
            end: "bottom top",
            onEnter: batch =>
                gsap.to(batch, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                    ease: "back.out(1.4)",
                    stagger: 0.15,
                    overwrite: true,
                }),
            onLeave: batch =>
                gsap.set(batch, {
                    autoAlpha: 0,
                    y: -120,
                    overwrite: true,
                }),

            onEnterBack: batch =>
                gsap.to(batch, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.15,
                    overwrite: true,
                    ease: "back.out(1.4)",
                }),
            onLeaveBack: batch =>
                gsap.set(batch, {
                    autoAlpha: 0,
                    y: 120,
                    overwrite: true,
                }),

        });

    })
}