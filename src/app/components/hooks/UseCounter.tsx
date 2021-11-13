import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin"

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export const useCounter = (obj1: string, obj2: string, obj3: string, trigger: string) => {
    useEffect(() => {
        gsap.set(obj1, {autoAlpha: 0, text: {value: "0.0"}})
		gsap.set(obj2, {autoAlpha: 0, text: {value: "0"}})
		gsap.set(obj3, {autoAlpha: 0, text: {value: "0"}})

		let tl = gsap.timeline({defaults: {autoAlpha: 1, duration: 0.15, ease: "power2"}, scrollTrigger: {
				trigger: trigger,
				start: "bottom bottom",
		}})

		tl.add("one");
		
		tl.to(obj1, {
			text: {
				value: "0.1",
				type: "diff",
			},
		}, "one");
		tl.to(obj2, {
			text: {
				value: "1",
				type: "diff",
				padSpace: true,
			},
		}, "one");
		tl.to(obj3, {
			text: {
				value: "100",
				type: "diff",
			},
		}, "one");

		tl.add("two");

		tl.to(obj1, {
			text: {
				value: "0.2",
				type: "diff",
			},
		}, "two");	
		tl.to(obj2, {
			text: {
				value: "2",
				type: "diff",
				padSpace: true,
			},
		}, "two");
		tl.to(obj3, {
			text: {
				value: "150",
				type: "diff",
			},
		}, "two");

		tl.add("three");
		
		tl.to(obj1, {
			text: {
				value: "0.3",
				type: "diff",
			},
		}, "three");
		tl.to(obj2, {
			text: {
				value: "3",
				type: "diff",
				padSpace: true,
			},
		}, "three");
		tl.to(obj3, {
			text: {
				value: "200",
				type: "diff",
			},
		}, "three");
		
		tl.add("four");
		
		tl.to(obj1, {
			text: {
				value: "0.4",
				type: "diff",
			},
		}, "four");	
		tl.to(obj2, {
			text: {
				value: "4",
				type: "diff",
				padSpace: true,
			},
		}, "four");
		tl.to(obj3, {
			text: {
				value: "250",
				type: "diff",
			},
		}, "four");
		
		tl.add("five");
		
		tl.to(obj1, {
			text: {
				value: "0.5",
				type: "diff",
			},
		}, "five");	
		tl.to(obj2, {
			text: {
				value: "5",
				type: "diff",
				padSpace: true,
			},
		}, "five");
		tl.to(obj3, {
			text: {
				value: "300",
				type: "diff",
			},
		}, "five");
		
		tl.add("six");
		
		tl.to(obj1, {
			text: {
				value: "0.6",
				type: "diff",
			},
		}, "six");	
		tl.to(obj2, {
			text: {
				value: "6",
				type: "diff",
				padSpace: true,
			},
		}, "six");
		tl.to(obj3, {
			text: {
				value: "350",
				type: "diff",
			},
		}, "six");
		
		tl.add("seven");
		
		tl.to(obj1, {
			text: {
				value: "0.7",
				type: "diff",
			},
		}, "seven");	

		tl.to(obj2, {
			text: {
				value: "7",
				type: "diff",
				padSpace: true,
			},
		}, "seven");
		tl.to(obj3, {
			text: {
				value: "400",
				type: "diff",
			},
		}, "seven");
		
		tl.add("eight");
		
		tl.to(obj1, {
			text: {
				value: "0.8",
				type: "diff",
			},
		}, "eight");	

		tl.to(obj2, {
			text: {
				value: "8",
				type: "diff",
				padSpace: true,
			}	
		}, "eight");
		tl.to(obj3, {
			text: {
				value: "450",
				type: "diff",
			},
		}, "eight");	
		
		tl.add("nine");

		tl.to(obj1, {
			text: {
				value: "0.9",
				type: "diff",
			},
		}, "nine");	

		tl.to(obj2, {
			text: {
				value: "9",
				type: "diff",
				padSpace: true,
			}	
		}, "nine");	
			tl.to(obj3, {
			text: {
				value: "500",
				type: "diff",
			},
		}, "nine");
		
		tl.add("ten");
		
		tl.to(obj1, {
			text: {
				value: "1.0",
				type: "diff",
			},
		}, "ten");	

		tl.to(obj2, {
			text: {
				value: "10",
				type: "diff",
				padSpace: true,
			}	
		}, "ten");
		tl.to(obj3, {
			text: {
				value: "600",
				type: "diff",
			},
		}, "ten");	
		
		tl.add("eleven");
		
		tl.to(obj1, {
			text: {
				value: "1.1",
				type: "diff",
			},
		}, "eleven");	

		tl.to(obj2, {
			text: {
				value: "11",
				type: "diff",
				padSpace: true,
			}	
		}, "eleven");	
			tl.to(obj3, {
			text: {
				value: "700",
				type: "diff",
			},
		}, "eleven");
		
		tl.add("twelve");
		
		tl.to(obj1, {
			text: {
				value: "1.2",
				type: "diff",
			},
		}, "twelve");	

			tl.to(obj2, {
			text: {
				value: "12",
				type: "diff",
				padSpace: true,
			},
		}, "twelve");
		
		tl.add("thirteen");

		tl.to(obj1, {
			text: {
				value: "1.3",
				type: "diff",
			},
		}, "thirteen");	

		tl.to(obj2, {
			text: {
				value: "13",
				type: "diff",
				padSpace: true,
			}	
		}, "thirteen");	
			tl.to(obj3, {
			text: {
				value: "800",
				type: "diff",
			},
		}, "thirteen");
		
		tl.add("fourteen");
		
		tl.to(obj1, {
			text: {
				value: "1.4",
				type: "diff",
			},
		}, "fourteen");
		tl.to(obj3, {
			text: {
				value: "900",
				type: "diff",
			},
		}, "fourteen");	

		tl.add("fifteen");
		
		tl.to(obj1, {
			text: {
				value: "1.5",
				type: "diff",
			},
		}, "fifteen");
		tl.to(obj3, {
			text: {
				value: "1k+",
				type: "diff",
			},
		}, "fifteen");

    })
}