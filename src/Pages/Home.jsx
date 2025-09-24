<<<<<<< HEAD
import { Box } from "@mui/material"; // ✅

import Herosection from "../Components/Home/Herosection";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import HairSection from "../Components/Home/Hair";
import SkinServices from "../Components/Home/Skin"

import About from "../Components/Home/WeProvider";
import FAQSection from "../Components/Home/FQA";
=======
import React from "react";
import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";

import Header from "../Components/Header";
import Herosection from "../Components/Home/Herosection";
import About from "../Components/Home/WeProvider";
import SkinServices from "../Components/Home/Skin";
import HairSection from "../Components/Home/Hair";
import FAQSection from "../Components/Home/FQA";
import Footer from "../Components/Footer";
>>>>>>> gh-pages

function Home() {
  return (
    <Box>
<<<<<<< HEAD
=======
      <Helmet>
        <title>GroHair & GloSkin – Advanced Hair & Skin Care in Cumbum</title>
        <meta
          name="description"
          content="Get expert hair regrowth and skin treatments at GroHair & GloSkin. Book your consultation today for healthy, glowing results."
        />
        <meta
          name="keywords"
          content="hair treatment, skin care, PRP therapy, hair transplant, laser hair removal, GroHair & GloSkin"
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

>>>>>>> gh-pages
      <Header />
      <Herosection />
      <About />
      <SkinServices />
      <HairSection />
<<<<<<< HEAD
      <FAQSection/>
=======
      <FAQSection />
>>>>>>> gh-pages
      <Footer />
    </Box>
  );
}

export default Home;
