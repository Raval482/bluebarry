import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import HomePageLayout from '../Layout/HomePageLayout'
import ExploreCategory from '../components/HeroSection/ExploreCategory'

const HomePage = () => {

  return (
    <HomePageLayout>
      <HeroSection />
      <ExploreCategory/>
    </HomePageLayout>
  )
}

export default HomePage