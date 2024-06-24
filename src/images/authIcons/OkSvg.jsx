const OkSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g fill="#30B94D" clipPath="url(#a)">
      <path d="M9.375 13.6 6 9.8l1.125-1.267 2.25 2.533L13.875 6 15 7.267l-5.625 6.331v.002Z" />
      <path
        fillRule="evenodd"
        d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10Zm10 8.182a8.181 8.181 0 1 1 0-16.363 8.181 8.181 0 0 1 0 16.363Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default OkSvg;
