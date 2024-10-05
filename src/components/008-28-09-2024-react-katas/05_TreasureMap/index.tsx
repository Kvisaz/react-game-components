interface TreasureMap {
  width: number;
  height: number;
}

export const TreasureMap = ({ width, height }: TreasureMap) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={width + "px"}
      height={height + "px"}
    >
      <defs>
        <filter id="filter">
          <feTurbulence
            baseFrequency="0.12"
            numOctaves="5"
            type="fractalNoise"
            result="result1"
          />
          <feDisplacementMap
            in2="result1"
            scale="10"
            result="result2"
            xChannelSelector="R"
            in="SourceGraphic"
          />
        </filter>
      </defs>
      <rect
        fill="#964b00"
        filter="url(#filter)"
        width="100%"
        height="100%"
        x="0"
        y="0"
      />
    </svg>
  );
};
