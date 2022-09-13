import React from 'react'
import { Hero } from '../components/homepage/hero'
import { Products } from '../components/homepage/products'
import { HomeLayout } from '../components/layouts/home'

export const HomePage = () => {
  return (
    <HomeLayout>
        <Hero/>
        <Products/>
    </HomeLayout>
  )
}
