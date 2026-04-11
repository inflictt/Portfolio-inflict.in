import { useEffect, useState } from "react";
import profilePic from "../assets/Saksham.jpg";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";
export default function About() {
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

    return (<>

        <section id="about" >

            <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between py-10 px-4 sm:px-6 gap-6 md:gap-8 bg-black/85" >
                <div ref={picRef} className=" w-75 h-75 rounded-3xl
  bg-[radial-gradient(circle_at_35%_30%,#1a3a52_0%,#0a1825_70%)]
  border border-teal-400/25
  shadow-[0_0_60px_rgba(61,219,198,0.12),0_0_120px_rgba(125,78,212,0.08),inset_0_0_40px_rgba(0,0,0,0.3),inset_0_20px_40px_rgba(61,219,198,0.05)]
  flex items-center justify-center">
                    <img
                        className="rounded-2xl w-full"
                        src={profilePic}
                        alt="" />
                </div>
                <div

                    className="flex-2 text-left rounded-2xl pb-3 md:pl-4 flex flex-col w-full md:w-1/2">
                    <p className="text-md text-teal-500">About </p>
                    <p className="text-2xl sm:text-3xl italic ">Me</p>
                    <br></br>
                    <p className=" text-gray-300 text-sm sm:text-base">I started coding in my first year just because I wanted to build things that actually worked, and it kind of stuck with me ever since. These days I mostly work with React, Node, and Django, and I like playing around with AI tools to see what I can make with them. <br /></p>
                    <p className="pt-2 text-sm sm:text-base">
                        When I’m not coding, I’m usually listening to King on repeat because his storytelling really resonates with me, or exploring random ideas and topics that catch my interest. I’m still learning something new almost every day, and honestly, that’s the part I enjoy the most.</p>

                </div>

            </div>



        </section>
    </>)
}