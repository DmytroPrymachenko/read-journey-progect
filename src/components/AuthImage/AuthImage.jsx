import { AuthImageWrap, Picture } from "./AuthImage.Styled";
import IPhone from "../../images/IPhone.png";
import IPhone2x from "../../images/IPhone@2x.png";
import IPhoneDesk from "../../images/IPhoneDesk.png";
import IPhoneDesk2x from "../../images/IPhoneDesk@2x.png";

export const AuthImage = () => {
  return (
    <AuthImageWrap>
      <picture>
        <source
          media="(max-width:1279px)"
          srcSet={IPhone + " 1x, " + IPhone2x + " 2x"}
        />
        <source srcSet={IPhoneDesk + " 1x, " + IPhoneDesk2x + " 2x"} />
        <Picture src={IPhoneDesk} alt="IPhone" loading="lazy" />
      </picture>
    </AuthImageWrap>
  );
};
