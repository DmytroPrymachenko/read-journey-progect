const BlackWhiteSquare = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <rect width={16} height={16} fill="#F9F9F9" rx={4} />
    <rect width={8} height={8} x={4} y={4} fill="#141414" rx={2} />
  </svg>
);
export default BlackWhiteSquare;
