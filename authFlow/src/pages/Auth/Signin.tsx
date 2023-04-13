import React from 'react'
import styled from 'styled-components'
import { Card } from '../../components'

const SignIn = () => {
  return (
    <div>
        <Main>
            <Card
             sign={true}
             reset={false}
           
             title1="Your Email"
             title2="Your Password"
        
            title='sign in Now!!!!' buttonTitle='Sign In' onClick={()=>{
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