import React from 'react'
import {Navb} from "../utils/navbar";
import {Footer} from '../utils/footer';




export const HomeLayout = ({children}) => {
  return (
    <>
    <Navb/>
    {children}
    <Footer/>
    </>
  )
}
