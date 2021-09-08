import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

import { Face } from "./Face";

import { range } from "d3";

// import BackgroundCircle from 'Back
const width = 960;
const height = 500;
const circleRadius = 30;
const initialMousePosition = { x: width / 2, y: height / 2 };
//const strokeWidth = 5;

const array = range(5);

/*
const App = () =>
  array.map(() => (
    <Face
      width={width}
      height={height}
      centerX={width / 2}
      centerY={height / 2}
      strokeWidth={5}
      eyeOffset={60}
      eyeR={10 + Math.random() * 20}
      mouthWidth={20 * Math.random()}
      mouthRadius={140}
    />
  ));
*/

const App = () => {
  const [mousePosition, setMousePosition] = useState(initialMousePosition);

  // useCallback has handleMouseMove register as an event listener only once!
  const handleMouseMove = useCallback( ({ clientX, clientY }) => { // 1st argument - function, 2nd argument - dependencies
      setMousePosition({ x: clientX, y: clientY });
    },
    [setMousePosition] // 2nd argument - dependency
  );

  return (
    <svg width={width} height={height}>
      <circle
        cx={mousePosition.x}
        cy={mousePosition.y}
        r={circleRadius}
        onMouseMove={handleMouseMove}
      />
    </svg>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
