import styled from "styled-components";

const StyledSVG = styled.svg`
  transition: transform 0.6s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Logo = (props) => (
  <StyledSVG
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={25}
    fill="none"
    {...props}
  >
    <g fill="#F9F9F9" filter="url(#a)">
      <path d="M4 11V0h12.89c1.753 0 3.46.558 4.873 1.594a6.216 6.216 0 0 1 1.962 2.393l1.491 3.205a21.673 21.673 0 0 1 2.155-4.003l.074-.108c.245-.361.527-.696.839-1.001l.635-.62a4.313 4.313 0 0 1 1.444-.933l.055-.022A7.366 7.366 0 0 1 33.1 0H46v11H4ZM4 13h42v4H4z" />
    </g>
    <defs>
      <filter
        id="a"
        width={50}
        height={25}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_252_3242"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_252_3242"
          result="shape"
        />
      </filter>
    </defs>
  </StyledSVG>
);
export default Logo;
