import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import EyeOpenSvg from "../../images/authIcons/EyeOpenSvg";
import EyeCloseSvg from "../../images/authIcons/EyeCloseSvg";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { signInThunk } from "../../store/auth/operations";
import { selectIsLoading } from "../../store/auth/selectors";
import { useNavigate } from "react-router-dom";
import {
  AuthButton,
  AuthEyeBtn,
  AuthForm,
  AuthInput,
  AuthInputContainer,
  AuthInputTitle,
  AuthInputWrap,
  AuthLabel,
  AuthSlogan,
  AuthSpan,
  AuthSubmitBlock,
  EmtyBlock,
  EnterWrap,
  ErrorSpan,
  ErrorSvgStyled,
  LinkStyled,
  LogoLink,
  LogoStyled,
  LogoTitleSvgStyled,
  OkSvgStyled,
} from "./Login.Styled";

const schema = yup.object({
  email: yup
    .string()
    .email("Please write a valid email")
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
    .required("The email is required"),
  password: yup
    .string()
    .min(7, "The password must contain a minimum of 7 characters")
    .required("The password is required"),
});

export const Login = () => {
  const isLoading = useSelector(selectIsLoading);
  const [eye, setEye] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  useEffect(() => {}, []);
  function onSubmit({ email, password }) {
    dispatch(signInThunk({ email, password }))
      .unwrap()
      .then(() => {
        toast.success(`Welcome`);
        navigate("/recommended");
      })
      .catch((err) => {
        toast.error(err);
      });
  }

  return (
    <>
      {isLoading && <Loader />}
      <EnterWrap>
        <LogoLink to={"/register"}>
          <LogoStyled />
          <LogoTitleSvgStyled />
        </LogoLink>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <AuthSlogan>
            Expand your mind, reading <AuthSpan>a book</AuthSpan>
          </AuthSlogan>
          <AuthInputWrap>
            <AuthLabel>
              <AuthInputContainer $err={errors.email}>
                <AuthInputTitle>Mail:</AuthInputTitle>
                <AuthInput
                  placeholder="Mail:"
                  type="text"
                  {...register("email")}
                  id="email"
                  $value={register.value}
                />
                <ErrorSvgStyled $err={errors.email} />
                <OkSvgStyled $err={errors.email} />
              </AuthInputContainer>
              <ErrorSpan>{errors.email?.message}</ErrorSpan>
            </AuthLabel>
            <AuthLabel>
              <AuthInputContainer $err={errors.password}>
                <AuthInputTitle>Password:</AuthInputTitle>
                <AuthInput
                  placeholder="Password:"
                  type={eye ? "text" : "password"}
                  {...register("password")}
                />
                <ErrorSvgStyled $err={errors.password} />
                <OkSvgStyled $err={errors.password} />
              </AuthInputContainer>
              <ErrorSpan>{errors.password?.message}</ErrorSpan>
              <AuthEyeBtn
                $err={errors.password}
                type="button"
                onClick={() => setEye(!eye)}
                aria-label="show or hide password"
              >
                {eye ? <EyeOpenSvg /> : <EyeCloseSvg />}
              </AuthEyeBtn>
            </AuthLabel>
            <EmtyBlock></EmtyBlock>
          </AuthInputWrap>
          <AuthSubmitBlock>
            <AuthButton name="submit" type="submit" aria-label="Log In">
              Log in
            </AuthButton>
            <LinkStyled to={"/register"}>Don’t have an account?</LinkStyled>
          </AuthSubmitBlock>
        </AuthForm>
      </EnterWrap>
    </>
  );
};
