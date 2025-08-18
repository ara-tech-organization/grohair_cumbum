import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
// import SkinServicesGrid from '../Components/Services/Skin'
import GroServicesTabs from '../Components/Services/SeviceSection'
// import HairServices from '../Components/Services/Hair'
function Services() {
  return (
    <div>
        
      <Header/>
      <GroServicesTabs/>
      {/* <SkinServicesGrid/> */}
      {/* < HairServices/> */}
      <Footer/>
    </div>
  )
}

export default Services
