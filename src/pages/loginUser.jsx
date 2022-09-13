import React from 'react'
import { Login } from '../components/auth/login'
import { HomeLayout } from '../components/layouts/home'

export const LoginUser = () => {
  return (
    <HomeLayout>
        <Login login={"User"}/>
    </HomeLayout>
  )
}
