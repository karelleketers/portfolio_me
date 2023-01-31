import React, {useEffect, useState} from 'react';
import gsap from 'gsap';

export const Cookies = () => {

    const [isAccepted, setIsAccepted] = useState(() => {
        const saved = localStorage.getItem("isAccepted");
        const initialValue = saved ? JSON.parse(saved) : false
        return initialValue;
    })

    const handleOnClick = () => {
        setIsAccepted(true);
    };

    useEffect(() => {
        localStorage.setItem("isAccepted", JSON.stringify(isAccepted));
        if(isAccepted === false) {gsap.set(".cookies", {display: "block"})};
        isAccepted && gsap.set(".cookies", {display: "none"})
    }, [isAccepted]);

    return (
        <div className="max-w-120 cookies hidden font-josefine bottom-0 bg-dark fixed z-400 w-full h-cookiessm xs:h-liftsm lg:h-cookies">
            <div className="m-auto px-8 lg:px-12 w-full h-full max-w-textheromd flex flex-col lg:flex-row lg:flex-wrap justify-around items-center">
            <p className="text-base lg:text-xl">We never take any cookies.&nbsp;<span className="text-gold"> We only bake them.</span></p>
            <button onClick={handleOnClick} className="transition-all p-2 lg:py-2 lg:px-4 border border-gold rounded-full hover:border-light hover:text-gold duration-200 nav-buttons text-xs lg:text-base">
                Yes, please!
            </button>
            </div>
        </div>
    )
}
