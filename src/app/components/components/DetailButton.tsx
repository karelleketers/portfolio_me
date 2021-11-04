import React, { useEffect, useState } from 'react'
import gsap from 'gsap'

interface DetailButtonProps {
    prefix: string
    children: React.ReactNode
    /* onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void */
}

export const DetailButton = ({ prefix, children }: DetailButtonProps) => {
    const [status, setStatus] = useState(false)


    useEffect(() => {
        console.log(prefix);
        console.log(status);
        let tl = gsap.timeline();
        if (status) {
            tl.set('.container', {flex:1}); 
            tl.to(`.${prefix}-container`, {flex:2})
        } else {
            gsap.to('.container', {flex:1})
        }
    }, [status, prefix])

    return (
        <button
            type="button"
            onClick={() => setStatus(!status)}
            className="peer trial relative transition-all hover:text-gold z-30 m-auto text-intermezzo547lg text-light text-center duration-300"
        >
            {children}
        </button>
    )
}
