import React from 'react';
import { Helmet } from "react-helmet-async";

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import GroServicesTabs from '../Components/Services/SeviceSection';

function Services() {
  return (
    <div>
      <Helmet>
        <title>Our Services – GroHair & GloSkin – Advanced Hair & Skin Care in Cumbum</title>
        <meta
          name="description"
          content="Explore the hair and skin care services offered by GroHair & GloSkin, including hair transplant, PRP therapy, laser hair removal, and advanced skin treatments."
        />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="GroHair & GloSkin – Advanced Hair & Skin Care in Cumbum"
        />
        <meta
          property="og:description"
          content="Explore the hair and skin care services offered by GroHair & GloSkin, including hair transplant, PRP therapy, laser hair removal, and advanced skin treatments."
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
        <meta property="twitter:domain" content="adgrocumbum.in" />
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
          content="Explore the hair and skin care services offered by GroHair & GloSkin, including hair transplant, PRP therapy, laser hair removal, and advanced skin treatments."
        />
        <meta
          name="twitter:image"
          content={`${process.env.PUBLIC_URL}/image.jpg`}
        />
      </Helmet>

      <Header />
      <GroServicesTabs />
      <Footer />
    </div>
  );
}

export default Services;
