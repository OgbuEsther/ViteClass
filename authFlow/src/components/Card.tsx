import React from "react";
import styled from "styled-components";
import { ICard } from "../types";
import Button from "./Button";
import InputData from "./Input";
import {Link} from "react-router-dom"

const Card: React.FC<ICard> = ({
  title,
  title1,
  title2,
  title3,
  sign,
  reset,
  buttonTitle,
  onClick,
  route, 
  text,
  path,
  call , 
  route1, 
  text1,
  path1,
}) => {
  return (
    <div>
      <Main>
        <Text>{title} </Text>
        <InputData
          sign={sign}
          reset={reset}
          title1={title1}
          title2={title2}
          title3={title3}
        />

        <Button
          onClick={onClick}
          buttonTitle={buttonTitle}
          bg="black"
          col="white"
        />
        <Content>{text} <Span to ={`${path}`}>{route} </Span></Content>
        {
          call ? <Content>{text1} <Span to ={`${path1}`}>{route1} </Span></Content> : null
        }
      </Main>
    </div>
  );
};

export default Card;

const Span = styled(Link)`
    color: blue;
    margin-left: 5px;
   transition: all 350ms;
   text-decoration: none;
   cursor: pointer;
    font-weight: bold;
    :hover{
transform: scale(0.99);
color: black;
    }
  `

const Content = styled.div`
  display: flex;
  margin-top: 10px;

 
`
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
  margin-bottom: 10px;
`;

const Main = styled.div`
  width: 400px;
  min-height: 400px;
  border-radius: 10px;
  border-color: lightgray;
  background-image: linear-gradient(to right, #00b4db, #0083b0);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;
