import React from 'react'
import Favorites from './component/Favorites'
import Footer from './component/Footer'
import Header from './component/Header'
import Profile from './component/Profile'

const App = () => {
  return (
    <>
        <Header />
        <Profile />
        <Favorites />
        <Footer />
    </>
  )
}

export default App