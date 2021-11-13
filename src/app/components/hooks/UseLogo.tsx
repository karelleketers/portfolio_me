import { useEffect} from 'react';
import gsap from "gsap";


export const useLogo = (obj: string) => {
    useEffect(() => {

        let tl = gsap.timeline();
        tl.set(obj, {autoAlpha: 0});
        tl.to(obj, {autoAlpha: 1, duration: 4, ease:"sine.inOut"});
    })
}
