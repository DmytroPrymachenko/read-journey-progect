import { RecommendedBooks } from "../RecommendedBooks/RecommendedBooks";
import {
  ContentWrap,
  ErrorSpan,
  FiltersFormWrap,
  FiltersTitle,
  Form,
  Input,
  InputContainer,
  InputTitle,
  InputWrap,
  Label,
  SubmitButton,
} from "./Dashboard.Styled";

export const Dashboard = ({
  title,
  inputs,
  titleButton,
  secondPart,
  register,
  handleSubmit,
  onSubmit,
  errors,
  validation,
}) => {
  // const validation = false;
  function chooseSecondPart(string) {
    switch (string) {
      case "Start your workout":
        return <></>;
      case "Recommended books":
        return (
          <>
            <RecommendedBooks />
          </>
        );
      case "":
        return <></>;
      case "4":
        return <></>;
      case "statistics":
        return <></>;

      default:
        "Start your workout";
        break;
    }
  }
  return (
    <>
      <ContentWrap>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FiltersFormWrap>
            <FiltersTitle>{title}</FiltersTitle>
            <InputWrap>
              {inputs.map((el, idx) => (
                <InputContainer key={idx}>
                  <Label>
                    {el.label}
                    <InputTitle>{el.title}</InputTitle>
                    <Input
                      placeholder={el.placeholder}
                      type={el.type}
                      {...register(
                        el.name,
                        validation && {
                          required: {
                            value: true,
                            message: "The field must not be empty!",
                          },
                        }
                      )}
                    ></Input>
                  </Label>
                  <ErrorSpan>
                    {errors[register(el.name).name]?.message}
                  </ErrorSpan>
                </InputContainer>
              ))}
            </InputWrap>
          </FiltersFormWrap>
          <SubmitButton name="submit" type="submit" aria-label={titleButton}>
            {titleButton}
          </SubmitButton>
        </Form>
        <div>{chooseSecondPart(secondPart)}</div>
      </ContentWrap>
    </>
  );
};
