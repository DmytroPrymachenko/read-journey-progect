import SvgFavicon from "../../images/favicon/SvgFavicon";
import { LogoText, LogoWrap } from "./Logo.Styled";

export const Logo = () => {
  return (
    <LogoWrap>
      <SvgFavicon />
      <LogoText>read journey</LogoText>
    </LogoWrap>
  );
};
