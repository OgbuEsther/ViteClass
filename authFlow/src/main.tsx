import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {RouterProvider} from "react-router-dom"
import { AuthRoutes } from './routes/AuthRoutes'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={AuthRoutes} />


    {/* <App /> */}
  </React.StrictMode>,
)
