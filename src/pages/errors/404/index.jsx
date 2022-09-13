import React from 'react'
import { useNavigate } from 'react-router-dom'

import "./style.css"
export const PageNotFound = () => {
    const navigate=useNavigate();
  return (
    <div className="container-fluid  w-100">
        <div className="d-flex text-center align-items-center justify-content-center flex-column vh-100">
            <h1 className='error'>404</h1>
        <h1 className=''>Not found page</h1>
        <p>Click the button bellow to return to home page</p>
        <button className='btn btn-outline-dark btn-lg' onClick={() => navigate("/")}>Return</button>
        </div>
    </div>
  )
}
