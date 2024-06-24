const Star = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h32v32H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.01389)" />
      </pattern>
    </defs>
  </svg>
);
export default Star;
