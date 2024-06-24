const BurgerOpen = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <path
      stroke="#F9F9F9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.5 14h21m-21-7h21m-14 14h14"
    />
  </svg>
);
export default BurgerOpen;
