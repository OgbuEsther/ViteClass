import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import Register from './pages/Auth/Register'
import SignIn from './pages/Auth/Signin'
import ResetPassword from './pages/Email/ResetPassword'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{display: "flex" , flexWrap: "wrap" }} className="App">

 <Register /> 
 <SignIn /> 
<ResetPassword />
    {/* <Card title='Sign In' />
    <Card title='OTP' />
    <Card title='Verification' /> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank" >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
