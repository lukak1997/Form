import styled from "styled-components";
import TextComponent from "./TextComponent";
import errorphoto from "../assets/images/Rectangle (2).png";
import { useForm, SubmitHandler } from "react-hook-form";

function CardComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>();
  type InputType = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  };
  console.log(errors);

  const Submit: SubmitHandler<InputType> = (data) => {
    console.log(data);
  };
  return (
    <FlexDiv>
      <TextComponent />
      <div>
        <TrialTextDiv>
          <TrialText>Try it free 7 days</TrialText>
        </TrialTextDiv>
        <Card>
          <InputDiv onSubmit={handleSubmit(Submit)}>
            <Input
              placeholder="First Name"
              {...register("firstname", {
                required: "First Name cannot be empty",
              })}
              Error={errors.firstname}
            />

            {errors.firstname && (
              <ErrorName>{errors.firstname?.message}</ErrorName>
            )}

            {errors.firstname && (
              <CircleName>
                <ImageName src={errorphoto} />
              </CircleName>
            )}
            <Input
              placeholder="Last Name"
              {...register("lastname", {
                required: "Last Name cannot be empty",
              })}
              Error={errors.lastname}
            />

            {errors.lastname && (
              <ErrorLastName>{errors.lastname.message}</ErrorLastName>
            )}

            {errors.lastname && (
              <CircleLastName>
                <ImageName src={errorphoto} />
              </CircleLastName>
            )}

            <Input
              placeholder="Email Address"
              {...register("email", {
                required: "Email cannot be empty",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "Looks like this is not an email",
                },
              })}
              Error={errors.email}
            />

            {errors.email && <ErrorEmail>{errors.email?.message}</ErrorEmail>}

            {errors.email && (
              <CircleEmail>
                <ImageName src={errorphoto} />
              </CircleEmail>
            )}

            <Input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password cannot be empty",
                pattern: {
                  value:
                    /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
                  message:
                    "Minimum 8 characters, min one uppercase/lowercase letter and one number",
                },
              })}
              Error={errors.password}
            />

            {errors.password && (
              <CirclePassword>
                <ImageName src={errorphoto} />
              </CirclePassword>
            )}

            {errors.password && (
              <FormPassword>{errors.password.message}</FormPassword>
            )}

            <Button type="submit">CLAIM YOUR FREE TRIAL</Button>
          </InputDiv>
          <Text>By clicking the button, you are agreeing to our</Text>
        </Card>
      </div>
    </FlexDiv>
  );
}

export default CardComponent;
const FlexDiv = styled.div`
  @media (min-width: 1440px) {
    display: flex;
  }
`;

const FormEmail = styled.h1`
  @media (max-width: 1440px) {
    display: none;
  }
  color: ${(props) => props.theme.colors.Red};
  font-size: 11px;
  font-weight: 700;
  line-height: 16.5px;
  font-family: "Poppins";
  font-style: "Medium Italic";
  position: absolute;
  top: 52%;
  right: 8%;
`;
const FormPassword = styled(FormEmail)`
  top: 69%;
`;
const ErrorName = styled.h1`
  @media (min-width: 1440px) {
    color: ${(props) => props.theme.colors.Red};
    font-size: 11px;
    font-weight: 700;
    line-height: 16.5px;
    font-family: "Poppins";
    font-style: "Medium Italic";
    position: absolute;
    top: 17.5%;
    right: 8%;
  }
  @media (max-width: 1440px) {
    display: none;
  }
`;
const ErrorLastName = styled(ErrorName)`
  top: 35%;
`;
const ErrorEmail = styled(ErrorName)`
  top: 52%;
`;

const CircleName = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.Red};
  position: absolute;
  top: 8.5%;
  right: 10.5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CircleLastName = styled(CircleName)`
  top: 25.5%;
`;
const CircleEmail = styled(CircleName)`
  top: 42.5%;
`;
const CirclePassword = styled(CircleName)`
  top: 59.5%;
`;
const ImageName = styled.img``;

const TrialTextDiv = styled.div`
  width: 327px;
  height: 88px;
  border-radius: 10px;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.1469);
  background-color: ${(props) => props.theme.colors.Blue};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1440px) {
    width: 540px;
    height: 60px;
    margin-top: 121px;
  }
`;
const TrialText = styled.h1`
  color: ${(props) => props.theme.colors.White};
  font-size: 15px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0.27px;
  width: 170px;
  text-align: center;
  font-family: "Poppins";
  @media (min-width: 1440px) {
    width: 540px;
  }

  ::after {
    content: "then $20/mo. thereafter";
    font-size: 15px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.27px;
    font-family: "Poppins";
    padding-left: 5px;
  }
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.White};
  width: 327px;
  height: 442px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.1469);
  margin-top: 24px;
  position: relative;
  @media (min-width: 1440px) {
    width: 540px;
    height: 474px;
  }
`;

const InputDiv = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 1440px) {
    gap: 25px;
  }
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.Green};
  color: ${(props) => props.theme.colors.White};
  width: 279px;
  height: 56px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 1px;
  outline: none;
  border: none;
  box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.0909) inset;
  font-family: "Poppins";
  @media (min-width: 1440px) {
    width: 460px;
  }
`;

const Text = styled.h1`
  color: ${(props) => props.theme.colors.WhiteGray};
  font-size: 11px;
  font-weight: 500;
  line-height: 21px;
  width: 249px;
  text-align: center;
  font-family: "Poppins";
  margin-top: 8px;
  @media (min-width: 1440px) {
    width: 400px;
  }

  ::after {
    content: "Terms and Services";
    color: ${(props) => props.theme.colors.Red};
    font-size: 11px;
    font-weight: 700;
    line-height: 21px;
    padding-left: 3px;
    font-family: "Poppins";
  }
`;
const Input = styled.input<{ Error: any }>`
  background-color: ${(props) => props.theme.colors.White};
  width: 279px;
  height: 56px;
  border-radius: 5px;
  border: 
    ${(props) => (props.Error ? "1px solid #FF7979" : "1px solid #DEDEDE")};
  outline: none;
  padding-left: 19.41px;
  color: ${(props) => props.theme.colors.DarkGray};
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins";
  position: relative;
  @media (min-width: 1440px) {
    width: 460px;
    padding-left: 32px;
  }
  ::placeholder {
    color: ${(props) => props.theme.colors.DarkGray};
    font-size: 14px;
    font-weight: 600;
    opacity: 0.75;
    font-family: "Poppins";
  }
`;
