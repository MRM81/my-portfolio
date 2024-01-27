import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RecentProjects = () => {
  const elementsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    elementsRef.current.forEach((element, index) => {
      const isEven = index % 2 === 0;
      if (element) {
        if (isEven) {
          gsap.to(element, {
            x: 200,
            duration: 8,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: element,
              scrub: 3,
              toggleActions: "restart reverse none none",
              markers: false,
            },
          });
        } else {
          gsap.to(element, {
            x: -200,
            duration: 8,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: element,
              scrub: true,
              toggleActions: "restart none none none",
              markers: false,
            },
          });
        }
      }
    });
  }, []);

  return (
    <div className="recent-work">
      <h1>Recent Work</h1>

      <div
        ref={(el) => (elementsRef.current[0] = el)}
        className="work-item item-1"
      >
        <img src="ivy-mae-home.png" alt="" />
        <h4>Ivy Mae Photography</h4>
        <h6>University project</h6>
      </div>

      <div
        ref={(el) => (elementsRef.current[1] = el)}
        className="work-item item-2"
      >
        <img src="vita-fun-home.png" alt="" />
        <h4>Vita Fun</h4>
        <h6>University project</h6>
      </div>

      <div
        ref={(el) => (elementsRef.current[2] = el)}
        className="work-item item-3"
      >
        <img src="the-cheetah-home.png" alt="" />
        <h4>The cheetah</h4>
        <h6>University project</h6>
      </div>

      <div
        ref={(el) => (elementsRef.current[3] = el)}
        className="work-item item-4"
      >
        <img src="ivy-mae-home.png" alt="" />
        <h4>Ivy Mae Photography</h4>
        <h6>University project</h6>
      </div>

      <div
        ref={(el) => (elementsRef.current[4] = el)}
        className="work-item item-5"
      >
        <img src="vita-fun-home.png" alt="" />
        <h4>Vita Fun</h4>
        <h6>University project</h6>
      </div>

      <div
        ref={(el) => (elementsRef.current[5] = el)}
        className="work-item item-6"
      >
        <img src="the-cheetah-home.png" alt="" />
        <h4>The cheetah</h4>
        <h6>University project</h6>
      </div>
    </div>
  );
};

export default RecentProjects;
