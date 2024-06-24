import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import EyeOpenSvg from "../../images/authIcons/EyeOpenSvg";
import EyeCloseSvg from "../../images/authIcons/EyeCloseSvg";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";
import { signInThunk, signUpThunk } from "../../store/auth/operations";
import { selectIsLoading } from "../../store/auth/selectors";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
// import { Container } from "../Layout/Layout.Styled";
import {
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
  EnterWrap,
  ErrorSpan,
  ErrorSvgStyled,
  LinkStyled,
  LogoLink,
  LogoStyled,
  LogoTitleSvgStyled,
  OkSvgStyled,
} from "../Login/Login.Styled";
import { AuthButton } from "./Register.Styled";

const schema = yup.object({
  name: yup.string().required("The name is required"),
  email: yup
    .string()
    .email("Please write a valid email")
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Please write a valid email")
    .required("The email is required"),
  password: yup
    .string()
    .min(7, "The password must contain a minimum of 7 characters")
    .required("The password is required"),
});

export const Register = () => {
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

  function onSubmit({ email, password, name }) {
    dispatch(signUpThunk({ email, password, name }))
      .unwrap()
      .then(() => {
        toast.success("Sign up done!");
        dispatch(signInThunk({ email, password }))
          .unwrap()
          .then(() => {
            toast.success(`Welcome`);
            navigate("/recommended");
          })
          .catch((err) => toast.error(err));
      })
      .catch(() => toast.error("Ooops... Something went wrong!"));
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
              <AuthInputContainer $err={errors.name}>
                <AuthInputTitle>Name:</AuthInputTitle>
                <AuthInput
                  placeholder="Name:"
                  type="text"
                  {...register("name")}
                />
                <ErrorSvgStyled $err={errors.name} />
                <OkSvgStyled $err={errors.name} />
              </AuthInputContainer>
              <ErrorSpan>{errors.name?.message}</ErrorSpan>
            </AuthLabel>
            <AuthLabel>
              <AuthInputContainer $err={errors.email}>
                <AuthInputTitle>Mail:</AuthInputTitle>
                <AuthInput
                  placeholder="Mail:"
                  type="text"
                  {...register("email")}
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
          </AuthInputWrap>
          <AuthSubmitBlock>
            <AuthButton name="submit" type="submit" aria-label="Log In">
              Registration
            </AuthButton>
            <LinkStyled to={"/login"}>Already have an account?</LinkStyled>
          </AuthSubmitBlock>
        </AuthForm>
      </EnterWrap>
    </>
  );
};
