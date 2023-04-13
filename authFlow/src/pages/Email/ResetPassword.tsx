import React from 'react'
import styled from 'styled-components'
import { Card } from '../../components'

const ResetPassword = () => {
  return (
    <div>
        <Main>
            <Card
             sign={false}
             reset={false}
             title1="OTP"
           
            title='ResetPassword!!!!' buttonTitle='Reset' onClick={()=>{
              console.log("ResetPassword successfully")
            }} />
        </Main>
    </div>
  )
}

export default ResetPassword

const Main = styled.div`
display : flex;
height : 100vh;
width : 100%;
justify-content : center;
align-items : center;
`