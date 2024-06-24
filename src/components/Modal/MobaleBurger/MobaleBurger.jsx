import {
  BurgerButtonExit,
  BurgerButtonLogAut,
  BurgerButtonWraper,
  BurgerContainer,
  BurgerContainerContant,
  BurgerExit,
  BurgerLinkWraper,
  HeaderLink,
} from "./MobaleBurger.Styled";
import ExitSVG from "../../../images/ExitSVG";

const MobaleBurger = ({ isOpen, handleLogout, closeModal }) => {
  return (
    <>
      <BurgerContainer className={isOpen ? "open" : ""}>
        <BurgerContainerContant>
          <BurgerExit>
            <BurgerButtonExit onClick={closeModal}>
              <ExitSVG />
            </BurgerButtonExit>
          </BurgerExit>
          <BurgerLinkWraper>
            <HeaderLink
              to="/recommended"
              aria-label="return to the main page"
              style={{ textDecoration: "none" }}
            >
              Home
            </HeaderLink>
            <HeaderLink
              to="/library"
              aria-label="return to the library page"
              style={{ textDecoration: "none" }}
            >
              My library
            </HeaderLink>
          </BurgerLinkWraper>

          <BurgerButtonWraper>
            <BurgerButtonLogAut onClick={handleLogout}>
              Log out
            </BurgerButtonLogAut>
          </BurgerButtonWraper>
        </BurgerContainerContant>
      </BurgerContainer>
    </>
  );
};

export default MobaleBurger;
