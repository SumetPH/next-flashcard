import React, { useRef } from "react";
import { TimelineLite } from "gsap";

const tl = new TimelineLite({ paused: false });

export default function Test() {
  const ref = useRef();

  const handle = () => {
    console.log("test");
    tl.to(ref, { duration: 1, css: { opacity: 1 } });
  };

  return (
    <div>
      <h1 ref={ref}>Test</h1>
    </div>
  );
}
