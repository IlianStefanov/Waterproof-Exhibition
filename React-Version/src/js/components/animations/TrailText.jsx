import React from 'react';
import {Trail, Spring, Transition, animated, config} from "react-spring/renderprops";
 

const getLetters = children => [...children].map((letter, key) => ({ letter, key }));
export const TrailText = ({ children, isHovered }) => (
  <Trail
    native
    reverse={isHovered}
    items={getLetters(children)}
    keys={item => item.key}
    config={config.wobbly}
    from={{ opacity: 0, y: -1 }}
    to={{ opacity: 1, y: isHovered ? 0 : 0 }}> 
    {(item, index) => ({ opacity, y }) => (
   
      <animated.div className="textIntro" key={index} style={{ opacity, transform: y.interpolate(y => `translate3d(0,${y}px,0)`) }}>
        <span>{item.letter}</span>
      </animated.div>
    )}
  </Trail>
);

// export default TrailText;