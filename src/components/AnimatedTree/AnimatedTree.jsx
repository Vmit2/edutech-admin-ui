import { useTransition } from "@react-spring/core";
import { animated } from "@react-spring/web";
import React, { useEffect, useState } from "react";
import {
  leftArrow, ref1,
  ref2,
  ref3,

  rightArrow
} from "../../Constants/imagesConstants";
import "./AnimatedTree.scss";
function AnimatedTree() {
  const [item1, setItem1] = useState([]);
  const transition1 = useTransition(item1, {
    from: { x: 0, y: -1000, opacity: 0 },
    enter: (item) => async (next) => {
      await next({ y: item.y, opacity: 1, delay: item.delay });
      await next({ x: 0, width: 100, height: 100 });
    },
    leave: { x: 100, y: 800, opacity: 0 },
  });

  const [item2, setItem2] = useState([]);
  const transition2 = useTransition(item2, {
    from: { x: 800, y: 0, opacity: 0 },
    enter: (item) => async (next) => {
      await next({ y: item.y, delay: item.delay });
      await next({ x: 0,  opacity: 1, width: 100, height: 100 });
    },
  });

  const [item3, setItem3] = useState([]);
  const transition3 = useTransition(item3, {
    from: { x: -1000, y: 0, opacity: 0 },
    enter: (item) => async (next) => {
      await next({ y: item.y, opacity: 1, delay: item.delay });
      await next({ x: 0, width: 100, height: 100 });
    },
  });

  useEffect(() => {
    setItem1((v) => (v.length ? [] : [{ y: 0, delay: 600 }]));
    setItem2((v) => (v.length ? [] : [{ y: 0, delay: 1200 }]));
    setItem3((v) => (v.length ? [] : [{ y: 0, delay: 1500 }]));
  }, []);
  return (
    <div className="container">
      <div className="firstTree">
        {transition1((style, item) =>
          item ? (
            <animated.img
              style={style}
              className="person1"
              src={ref1}
              height={100}
              width={100}
              alt="ref1"
            />
          ) : null
        )}
        {transition2((style, item) =>
          item ? (
            <animated.div style={style} className="secondRow">
              <img
                className="personLeftArrow"
                src={leftArrow}
                height={40}
                width={40}
                alt="left1"
              />
              <img
                className="personRightArrow"
                src={rightArrow}
                height={40}
                width={40}
                alt="right1"
              />
            </animated.div>
          ) : null
        )}
        {transition3((style, item) =>
          item ? (
            <animated.div style={style} className="thirdRow">
              <img
                className="person2"
                src={ref2}
                height={100}
                width={100}
                alt="ref2"
              />
              <img
                className="person3"
                src={ref3}
                height={100}
                width={100}
                alt="ref3"
              />
            </animated.div>
          ) : null
        )}
      </div>
    </div>
  );
}

AnimatedTree.propTypes = {};

export default AnimatedTree;
