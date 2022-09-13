import React from 'react'
import { Navigate } from 'react-router-dom';


export const PrivateRoute = ({ children }) => {
    const token = JSON.parse(localStorage.getItem("user"));
    if (token) {
        return (children)
    } else {
        return <Navigate to="/login" />
    }
}
