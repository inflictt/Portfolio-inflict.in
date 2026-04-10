import { useEffect, useState } from "react";
import profilePic from "../assets/Saksham.jpg";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";
export default function About(){
    const picRef = useRef(null)

    useGSAP(() => {
    gsap.fromTo(
        picRef.current,
        {
        scale: 1,
        rotation: 0,
        y: 0,
        },
        {
        scale: 0.85,
        rotation: -6,
        y: -20,
        scrollTrigger: {
            trigger: picRef.current,
            start: "top 70%",
            end: "top 20%",
            scrub: 1,
        },
        }
    );
    });

    return(<>

    <section id="about" >
       
<div className="flex flex-row items-stretch justify-between py-10 px-6 bg-black/85 pointer-events-none" >  
                <div ref={picRef} className=" w-full">
                <img
                    className="rounded-2xl"
                    src={profilePic} 
                    alt="" />
                </div>
                <div
                
                className="text-left rounded-2xl pb-3 pl-4 flex flex-col">
                    <p className="text-md text-teal-500">About </p>
                    <p className="text-3xl italic ">Me</p>
                    <br></br>
                    <p className=" text-gray-300 ">I started coding in my first year just because I wanted to build things that actually worked, and it kind of stuck with me ever since. These days I mostly work with React, Node, and Django, and I like playing around with AI tools to see what I can make with them. <br /></p>
                    <p className="pt-2">
                    When I'm not coding, I'm pretty chill. I play a lot of Brawl Stars, listen to King on repeat because his storytelling really hits, and get lost in random stuff I find interesting. Still learning something new almost every day, and that's the part I enjoy the most.</p>
                </div>
                
</div>

    
   
    </section>
    </>)
}
