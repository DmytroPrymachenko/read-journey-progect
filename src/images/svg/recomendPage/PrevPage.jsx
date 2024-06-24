const PrevPage = ({ isDisabled, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <circle cx={16} cy={16} r={15.5} stroke="#F9F9F9" strokeOpacity={0.2} />
    <path
      stroke="#F9F9F9"
      strokeOpacity={isDisabled ? 0.2 : 1}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18 20-4-4 4-4"
    />
  </svg>
);
export default PrevPage;
