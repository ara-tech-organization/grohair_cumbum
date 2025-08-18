import React from 'react'
// import FAQ from '../Components/About/FAQ'

import Header from '../Components/Header'
// import Section from '../Components/About/WeProvider'
import Footer from '../Components/Footer'
// import FAQSkin from '../Components/About/FAQSkin'
import AboutSection from '../Components/About/WeProvider'
import FAQSection from '../Components/About/FAQ'

function About() {
  return (
    <div>
        <Header/>
        <AboutSection/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default About
