const StopTabletSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <circle cx={25} cy={25} r={24} stroke="#F9F9F9" strokeWidth={2} />
    <rect width={20} height={20} x={15} y={15} fill="#E90516" rx={3} />
  </svg>
);
export default StopTabletSVG;
