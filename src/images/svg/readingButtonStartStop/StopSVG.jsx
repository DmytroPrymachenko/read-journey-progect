const StopSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <circle cx={20} cy={20} r={19} stroke="#F9F9F9" strokeWidth={2} />
    <rect width={15} height={15} x={12} y={13} fill="#E90516" rx={3} />
  </svg>
);
export default StopSVG;
