const TrashCanSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <circle cx={14} cy={14} r={14} fill="#E85050" fillOpacity={0.1} />
    <circle cx={14} cy={14} r={13.5} stroke="#E85050" strokeOpacity={0.2} />
    <path
      stroke="#E85050"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.75 10.5h10.5M18.084 10.5v8.167a1.167 1.167 0 0 1-1.167 1.166h-5.833a1.167 1.167 0 0 1-1.167-1.166V10.5m1.75 0V9.333a1.167 1.167 0 0 1 1.167-1.166h2.333a1.167 1.167 0 0 1 1.167 1.166V10.5M12.833 13.417v3.5M15.167 13.417v3.5"
    />
  </svg>
);
export default TrashCanSVG;
