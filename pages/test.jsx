import React, { useState, useEffect, useRef } from "react";
import { TimelineMax, TweenMax } from "gsap";

export default function Test() {
  const box = useRef();
  const [tw, setTw] = useState(new TimelineMax({ paused: true }));
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset < 1500) {
      TweenMax.to(box.current, 1, {
        css: { backgroundColor: "hsl(171, 100%, 41%)" },
      });
    } else {
      TweenMax.to(box.current, 1, {
        css: { backgroundColor: "hsl(217, 71%, 53%)" },
      });
    }
  };

  return (
    <>
      <div className="box" ref={box}>
        <div className="box1"></div>
        <div className="box2"></div>
      </div>
    </>
  );
}
