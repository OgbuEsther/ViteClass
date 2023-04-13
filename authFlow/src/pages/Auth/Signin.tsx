import React from 'react'
import styled from 'styled-components'
import { Card } from '../../components'

const SignIn = () => {
  return (
    <div>
        <Main>
            <Card title='sign in Now!!!!' buttonTitle='Sign UP' onClick={()=>{
              console.log("signed in successfully")
            }} />
        </Main>
    </div>
  )
}

export default SignIn

const Main = styled.div`
display : flex;
height : 100vh;
width : 100%;
justify-content : center;
align-items : center;
`