import React from 'react'
import {createBrowserRouter} from "react-router-dom"
import HomeLayOut from '../components/LayOut/HomeLayOut'
import Register from '../pages/Auth/Register'
import SignIn from '../pages/Auth/Signin'
import ResetPassword from '../pages/Email/ResetPassword'

export const AuthRoutes = createBrowserRouter(
    [
        {
            path : "/",
            element : <HomeLayOut />,
            children : [
                {
                    index : true,
                    element : <Register />
                },
                {
                    path : "/sign-in",
                    element : <SignIn />
                },
                {
                    path : "/reset",
                    element : <ResetPassword />
                }
            ]
        }
    ]
)