import React from "react";
import styled from "styled-components";
import { Card } from "../../components";
import SignIn from "./Signin";

const Register = () => {
  return (
    <div>
      <Main>
        <Card
          sign={true}
          reset={true}
          title1="Your Name"
          title2="Your Email"
          title3="Your Password"
          title="Register Now!!!!"
          buttonTitle="Sign UP"
          onClick={() => {
            console.log("signed up successfully");
          }}
          route = "sign-in"
          text = "Already Have An Account ?"
          path = "/sign-in"
          call = {false}
          route1 = "Reset Password"
          text1 = "Forgotten Your Password ?"
          path1 = "/reset"
        />
      </Main>
    </div>
  );
};

export default Register;

const Main = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
