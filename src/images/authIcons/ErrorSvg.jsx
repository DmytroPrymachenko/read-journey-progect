const ErrorSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#E90516"
        fillRule="evenodd"
        d="M10 18.125a8.125 8.125 0 1 0 0-16.25 8.125 8.125 0 0 0 0 16.25ZM10 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm1.25-6.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.313-7.813a.938.938 0 0 0-1.874 0v4.375a.937.937 0 0 0 1.874 0V5.939Z"
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
export default ErrorSvg;
