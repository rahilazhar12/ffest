import React from 'react'
import Navbar from './components/navbar/Navbar'
import FutureFestLandingPage from './pages/Home'
import FutureFest from './pages/About'
import DawnFestSection from './pages/Carousal'
import Attendees from './pages/Attendess'

const App = () => {
  return (
    <>
    <Navbar/>
    <FutureFestLandingPage/>
    <FutureFest/>
    <DawnFestSection/>
    <Attendees/>
    </>
  )
}

export default App