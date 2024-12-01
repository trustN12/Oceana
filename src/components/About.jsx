import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=570 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-slate-700 text-lg uppercase md:text-[15px]">
          Dive Into Oceana
        </h2>

        <AnimatedTitle
          title="Together, we can preserve the world&#39;s oceans and creatures "
          containerClass=" mt-5 !text-blue-500 text-center "
        />

        <div className="about-subtext">
          <p> Our Planet&#39;s Greatest Adventure</p>
          <p>Join the movement to protect and preserve marine life</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <video
            muted
            loop
            src="videos/About.mp4"
            className="absolute left-0 top-0 size-full object-cover"
            autoPlay
          />
        </div>
      </div>
    </div>
  );
};

export default About;
