import React from "react";
import styled from "styled-components";
import { ICard } from "../types";
import Button from "./Button";
import InputData from "./Input";

const Card:React.FC<ICard> = ({title ,buttonTitle ,onClick}) => {
  return (
    <div>
      <Main>
        <Text>{title} </Text>
        <InputData  sign = {true}  reset = {true}  title1="Your Name" title2="Your Email" title3="Your Password" />
      

        <Button onClick={onClick} buttonTitle= {buttonTitle} bg="black" col = "white" />
      </Main>
    </div>
  );
};

export default Card;

const Input = styled.input`
  border-radius: 5px;
  border: 1px solid lightblue;
  height: 35px;
  width: 300px;
`;

const Form = styled.form``;
const Field = styled.div`
  display: flex;
  justify-content: column;
`;

const Text = styled.div`
  margin-top: 40px;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 30px;
  color: black;
  margin-bottom : 10px;
`;

const Main = styled.div`
  width: 450px;
  min-height: 500px;
  border-radius: 10px;
  border-color: lightgray;
  background-image: linear-gradient(to right, #00b4db, #0083b0);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;
