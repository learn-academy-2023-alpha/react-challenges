import React from 'react'
import Favorite from './components/Favorite'
import Footer from './components/Footer'
import Header from './components/Header'
import Profile from './components/Profile'


// export const App = () => {
//   return (
//     <Header />
//   )
// }


const App = () => {
  return (
    <>
    <Header />
    <Profile/>
    <Favorite/>
    <Footer/>
    </>
  )
}

export default App