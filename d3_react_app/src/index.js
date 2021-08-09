import React from 'react';
import ReactDOM from 'react-dom';
import { arc } from 'd3';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 5;
const r = height/2 - strokeWidth / 2;

var mouthArc = arc()
    .innerRadius(0)
    .outerRadius(90)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 3/2);


const eyeOffset = 60
const eyeR = height / 15 - strokeWidth / 15

const App = () => (
    <div>
        <h1>Huygyuello huuihuihiuhihUM World</h1>
        <svg width={width} height={height}>
            <g transform={`translate(${centerX}, ${centerY})`}>
                <circle
                    r={r}
                    fill="yellow"
                    stroke="black"
                    strokeWidth={strokeWidth}
                />
                <circle
                    cx={-eyeOffset}
                    cy={-eyeOffset}
                    r = {eyeR}
                />

                <circle
                    cx={eyeOffset}
                    cy={-eyeOffset}
                    r = {eyeR}
                />
                <path d={mouthArc()}/>
            </g>
        </svg>
    </div>
);

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);