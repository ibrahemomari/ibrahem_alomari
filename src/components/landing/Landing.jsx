import React from "react";
import { useEffect } from "react";
import "../../assets/style/landing.css";
import gsap from "gsap";
function Landing() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
    tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
    tl.to(".intro", { x: "-100%", duration: 3, opacity: "0" }, "-=1");
    tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
  }, []);
  return (
    <>
      <div class="intro">
        <div class="intro-text">
          <h1 class="hide">
            <span class="text">Creating inovation</span>
          </h1>
          <h1 class="hide">
            <span class="text">For Everyday</span>
          </h1>
          <h1 class="hide">
            <span class="text">people.</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Landing;
