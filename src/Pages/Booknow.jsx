import React from 'react'
import { Helmet } from "react-helmet-async";

import Footer from '../Components/Footer'
import BookAppointment from '../Components/Booknow/Booknow'
import Header from '../Components/Header'

function Booknow() {
  return (
    <div>
      <Helmet>
        <title>Book Appointment – GroHair & GloSkin – Advanced Hair & Skin Care in Cumbum</title>
        <meta
          name="description"
          content="Get expert hair regrowth and skin treatments at GroHair & GloSkin. Book your consultation today for healthy, glowing results."
        />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="GroHair & GloSkin – Advanced Hair & Skin Care in Cumbum"
        />
        <meta
          property="og:description"
          content="Get expert hair regrowth and skin treatments at GroHair & GloSkin. Book your consultation today for healthy, glowing results."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/image.jpg`}
        />
        <meta
          property="og:url"
          content="https://adgrohairgloskincumbum.in/"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="adgrocumbum.in"
        />
        <meta
          property="twitter:url"
          content="https://adgrohairgloskincumbum.in/"
        />
        <meta
          name="twitter:title"
          content="GroHair & GloSkin – Advanced Hair & Skin Care in Cumbum"
        />
        <meta
          name="twitter:description"
          content="Get expert hair regrowth and skin treatments at GroHair & GloSkin. Book your consultation today for healthy, glowing results."
        />
        <meta
          name="twitter:image"
          content={`${process.env.PUBLIC_URL}/image.jpg`}
        />
      </Helmet>

      <Header />
      <BookAppointment />
      <Footer />
    </div>
  )
}

export default Booknow
