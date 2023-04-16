import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {RouterProvider} from "react-router-dom"
import { ShareState } from './global/ShareState'
import { AuthRoutes } from './routes/AuthRoutes'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ShareState>
    <RouterProvider router={AuthRoutes} />
    </ShareState>
    {/* <App /> */}
  </React.StrictMode>,
)
