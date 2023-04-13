import React from "react";
import styled from "styled-components";
import { buttonProps } from "../types/AllInterfaces";

const Button: React.FC<buttonProps> = ({ title, bg, col }) => {
  return (
    <div>
      <Main bg={bg} col={col}>
        <Text>{title} </Text>
      </Main>
    </div>
  );
};

export default Button;

const Text = styled.div`
  font-weight: bold;
`;

const Main = styled.button<{ bg: string; col: string }>`
  width: 120px;
  height: 40px;
  background-color: ${({ bg }) => bg};
  color: ${({ col }) => col};
  display: flex;
  transition: all 350ms;
  justify-content : center;
  align-items : center;
`;
