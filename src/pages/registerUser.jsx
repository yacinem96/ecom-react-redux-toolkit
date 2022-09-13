import React from 'react'
import { Register } from '../components/auth/register';
import { HomeLayout } from '../components/layouts/home';

const RegisterUser = () => {
    return (
        <HomeLayout>
            <Register/>
        </HomeLayout>
    )
}

export default RegisterUser;