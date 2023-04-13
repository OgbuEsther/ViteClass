import React from 'react'
import styled from 'styled-components'
import { Card } from '../../components'

const Register = () => {
  return (
    <div>
        <Main>
            <Card title='Register Now!!!!' />
        </Main>
    </div>
  )
}

export default Register

const Main = styled.div`
display : flex;
height : 100vh;
width : 100%;
justify-content : center;
align-items : center;
`