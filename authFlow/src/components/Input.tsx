import React , {useState} from 'react'
import styled from 'styled-components';
import { Iinput } from '../types';

const InputData:React.FC<Iinput> = ({title1 , title2 , title3 ,  sign , reset}) => {
  // const [sign , setSign]  = useState(false)
  // const [reset , setReset] = useState(false)
  return (
    <div>
        <Field>
          <Form>
            <Input placeholder={title1} />
         
         {
          sign ?    <Input placeholder={title2} /> : null
         }
         {
          reset ?    <Input placeholder={title3} /> : null
         }
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

const Form = styled.form`
  display: flex;
 flex-direction: column;
`;
const Field = styled.div`
  display: flex;
  justify-content: center;
`;
