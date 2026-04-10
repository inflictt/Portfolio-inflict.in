import { useEffect } from "react";
import gsap from "gsap";

export default function Cursor() {
  useEffect(() => {
    const move = (e) => {
      gsap.set(".cursor", {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.15,
        delay:0,
        ease: "power4.out",
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (<>
    <div className="cursor fixed top-0 left-0 w-5 h-5 bg-white rounded-full z-5 pointer-events-none" />

<div 

className="w-full h-screen flex justify-center items-center"> <h1
  onMouseEnter={()=>gsap.to((".cursor"),{
    scale:8,
    duration:0.4
  })}
  onMouseLeave={()=>gsap.to((".cursor"),{
    scale:1,
    duration:0.4
  })}
   className="text-9xl z-100">Hover ME!</h1></div>
    </>
  );
}