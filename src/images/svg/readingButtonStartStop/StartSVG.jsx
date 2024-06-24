const StartSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <circle cx={20} cy={20} r={15} fill="#E90516" />
    <circle cx={20} cy={20} r={19} stroke="#F9F9F9" strokeWidth={2} />
  </svg>
);
export default StartSVG;
