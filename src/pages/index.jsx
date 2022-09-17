import React from 'react'
import Contact from '../components/homepage/contact'
import { Hero } from '../components/homepage/hero'
import Localisation from '../components/homepage/localisation'
import { Products } from '../components/homepage/products'
import { HomeLayout } from '../components/layouts/home'

export const HomePage = () => {
  return (
    <HomeLayout>
        <Hero/>
        <Products/>
        <Localisation/>
        <Contact/>
    </HomeLayout>
  )
}
