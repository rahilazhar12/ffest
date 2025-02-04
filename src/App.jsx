import React from 'react'
import Navbar from './components/navbar/Navbar'
import FutureFestLandingPage from './pages/Home'
import FutureFest from './pages/About'
import DawnFestSection from './pages/Carousal'
import Attendees from './pages/Attendess'
import SpecialGuestsSection from './pages/Specialguest'
import ParticipatingCompaniesSection from './pages/Participatingcompanies'

const App = () => {
  return (
    <>
    <Navbar/>
    <FutureFestLandingPage/>
    <FutureFest/>
    <DawnFestSection/>
    <Attendees/>
    <SpecialGuestsSection/>
    <ParticipatingCompaniesSection/>
    </>
  )
}

export default App