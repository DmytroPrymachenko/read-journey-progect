import { useDispatch, useSelector } from "react-redux";
import Logo from "../../images/svg/logo/Logo";
import {
  HeaderButtonBurger,
  HeaderContainer,
  HeaderDivLink,
  HeaderIconUser,
  HeaderLink,
  HeaderLogoWraper,
  HeaderTabletLogOut,
  HeaderUserContainer,
  HeaderUserDextopContainer,
  HeaderUserDextopWraper,
  HeaderUserName,
} from "./Header.Styled";
import { selectUser } from "../../store/auth/selectors";
import BurgerOpen from "../../images/BurgerOpen";
import { useEffect, useState } from "react";
import MobaleBurger from "../Modal/MobaleBurger/MobaleBurger";
import Backdrop from "../Backdrop/Backdrop";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logoutThunk } from "../../store/auth/operations";

const Header = () => {
  const user = useSelector(selectUser);
  const [isMobaleBurger, setIsMobaleBurger] = useState(false);
  const userName = user && user.name ? user.name.charAt(0) : "";
  const [isBackdropActiveOpen, setIsBackdropActiveOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutThunk())
      .then(() => {
        toast.success("Successfully logged out.");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleBurgerOpen = () => {
    setIsMobaleBurger(!isMobaleBurger);
    setIsBackdropActiveOpen(true);
  };

  const closeModal = () => {
    setIsMobaleBurger(false);
    setIsBackdropActiveOpen(false);
  };

  const [isTabletView, setIsTabletView] = useState(window.innerWidth >= 768);
  const [isDextopView, setIsDextopView] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletView(window.innerWidth >= 768);
      setIsDextopView(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isBackdropActiveOpen && <Backdrop closeModal={closeModal} />}
      {isMobaleBurger && (
        <MobaleBurger
          handleLogout={handleLogout}
          closeModal={closeModal}
          isOpen={isMobaleBurger}
        />
      )}
      <HeaderContainer>
        <HeaderLogoWraper>
          <Logo />
          {isDextopView && <span>read journey</span>}
        </HeaderLogoWraper>
        {isTabletView ? (
          <>
            <HeaderDivLink>
              <HeaderLink
                to="/recommended"
                aria-label="Home"
                style={{ textDecoration: "none" }}
              >
                Home
              </HeaderLink>
              <HeaderLink
                to="/library"
                aria-label="My library"
                style={{ textDecoration: "none" }}
              >
                My library
              </HeaderLink>
            </HeaderDivLink>

            {isDextopView ? (
              <HeaderUserDextopContainer>
                <HeaderUserDextopWraper>
                  {userName && (
                    <HeaderIconUser>
                      <span>{userName}</span>
                    </HeaderIconUser>
                  )}
                  {user && user.name && (
                    <HeaderUserName>{user.name}</HeaderUserName>
                  )}
                </HeaderUserDextopWraper>
                <HeaderTabletLogOut onClick={handleLogout}>
                  Log out
                </HeaderTabletLogOut>
              </HeaderUserDextopContainer>
            ) : (
              <HeaderUserContainer>
                {userName && (
                  <HeaderIconUser>
                    <span>{userName}</span>
                  </HeaderIconUser>
                )}
                <HeaderTabletLogOut onClick={handleLogout}>
                  Log out
                </HeaderTabletLogOut>
              </HeaderUserContainer>
            )}
          </>
        ) : (
          <HeaderUserContainer>
            {userName && (
              <HeaderIconUser>
                <span>{userName}</span>
              </HeaderIconUser>
            )}
            <HeaderButtonBurger onClick={handleBurgerOpen}>
              <BurgerOpen />
            </HeaderButtonBurger>
          </HeaderUserContainer>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
