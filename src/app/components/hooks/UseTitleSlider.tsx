import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useTitleSlider = (trigger: string, obj1: string, obj2: string, obj3: string, obj4: string, obj5: string) => {
    useEffect(() => {
        let tl = gsap.timeline({repeat: 2, repeatDelay: 3, defaults: {duration: 2, ease: "slow"}, scrollTrigger: {
            trigger: trigger,
            toggleActions: "restart none none none",
        }});
        tl.add('one')
        tl.to(obj1, {y: 150, opacity: 0}, "one")
        tl.to(obj2, {y: 150, opacity: 1}, "one")

        tl.add('two')

        tl.to(obj2, {y: 300, opacity: 0}, "two")
        tl.to(obj3, {y: 150, opacity: 1}, "two")

        tl.add('three')

        tl.to(obj3, {y: 300, opacity: 0}, "three")
        tl.to(obj4, {y: 150, opacity: 1}, "three")

        tl.add('four')
        tl.to(obj4, {y: 300, opacity: 0}, "four")
        tl.to(obj5, {y: 150, opacity: 1}, "four")
        tl.to(obj1, {y: -300, opacity: 0}, "four")

        tl.add('five')
        tl.to(obj5, {y: 300, opacity: 0}, "five")
        tl.to(obj1, {y: 0, opacity: 1}, "five")

    }, [])
}