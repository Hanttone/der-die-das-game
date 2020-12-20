const SVG = ({ width, height, time }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 374.885 351.671">
      <defs>
        <radialGradient
          id="radial-gradient"
          cx="0.5"
          cy="0.5"
          r="0.5"
          gradientUnits="objectBoundingBox">
          <stop offset="0" stop-color="#771993" />
          <stop
            offset="1"
            stop-color="#572167"
            stop-opacity="0"
          />
        </radialGradient>
        <radialGradient
          id="radial-gradient-2"
          cx="0.5"
          cy="0.5"
          r="0.5"
          gradientUnits="objectBoundingBox">
          <stop offset="0" stop-color="#ad41ce" />
          <stop
            offset="1"
            stop-color="#572167"
            stop-opacity="0.961"
          />
        </radialGradient>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox">
          <stop offset="0" stop-color="#3b35de">
            <animate
              attributeName="stop-color"
              values="#3b35de; red; #3b35de"
              dur="10s"
              repeatCount="indefinite"></animate>
          </stop>
          <stop offset="1" stop-color="#blue">
            <animate
              attributeName="stop-color"
              values="blue; #3b35de; blue"
              dur="10s"
              repeatCount="indefinite"></animate>
          </stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox">
          <stop offset="0" stop-color="#41b9b0">
            <animate
              attributeName="stop-color"
              values="#41b9b0; #17767e; #41b9b0"
              dur={time}
              repeatCount="indefinite"></animate>
          </stop>
          <stop offset="1" stop-color="#17767e" />
        </linearGradient>
      </defs>
      <g
        id="Group_2"
        data-name="Group 2"
        transform="translate(0.363 -460.329)">
        <path
          id="Path_39"
          data-name="Path 39"
          d="M1067.521,1168.929s-46.063,2.308-89.988,24.655-85.711,64.731-85.711,64.731l-60.006,50.61-138.858,23.042V1444l374.563-10.774Z"
          transform="translate(-693 -632)"
          fill="url(#radial-gradient)"
        />
        <path
          id="Path_36"
          data-name="Path 36"
          d="M1067.521,1168.928s-46.063,2.057-89.988,21.966-85.711,57.672-85.711,57.672l-60.006,45.091-138.858,20.529V1414l374.563-9.6Z"
          transform="translate(-693 -602)"
          fill="url(#radial-gradient-2)"
        />
        <path
          id="Path_37"
          data-name="Path 37"
          d="M675.491,1150.962s18.7-81.146,42.123-74.213,23.69,113.036,51.925,127.853,43.126-82.994,61.014-68.586-1.062,105.687,10.537,126.219,19.426-52.617,35.859-44.092,14.269,62.368,29.873,78.19,21.335-22.715,32.544-14.9.44,30.062,12.291,46.155,18.37,28.285,43.05,40.809,55.668,9.286,55.668,9.286V1428H675.855Z"
          transform="translate(-675.854 -616)"
          fill="url(#linear-gradient)"
        />
        <path
          id="Path_38"
          data-name="Path 38"
          d="M679.248,1228.568s88.579,4.99,150.956,31.993,85.381,56.362,116.657,83.669,40.691,34.971,71.945,38.78,34.964-24.189,34.964-24.189V1411H679.248Z"
          transform="translate(-679.248 -599)"
          fill="rgba(54,159,173,0.43)"
        />
        <path
          id="Path_35"
          data-name="Path 35"
          d="M679.248,1235.562s86.443,2.8,148.826,27.962,69.429,47.228,100.708,72.67,38.141,28.683,69.4,32.231,55.63-18.038,55.63-18.038V1399H679.248Z"
          transform="translate(-679.289 -587)"
          fill="url(#linear-gradient-2)"
        />
      </g>
    </svg>
  );
};

export default SVG;
