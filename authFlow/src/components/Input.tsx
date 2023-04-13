import React from 'react'
import styled from 'styled-components';
import { Iinput } from '../types';

const InputData:React.FC<Iinput> = ({title}) => {
  return (
    <div>
        <Field>
          <Form>
            <Input placeholder={title} />
          </Form>
        </Field>
    </div>
  )
}

export default InputData


const Input = styled.input`
  border-radius: 5px;
  border: 1px solid lightblue;
  height: 35px;
  width: 300px;
  margin : 5px;
`;

const Form = styled.form``;
const Field = styled.div`
  display: flex;
  justify-content: column;
`;
