import { Box } from "@mui/material"; // ✅

import Herosection from "../Components/Home/Herosection";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import HairSection from "../Components/Home/Hair";
import SkinServices from "../Components/Home/Skin"

import About from "../Components/Home/WeProvider";
import FAQSection from "../Components/Home/FQA";

function Home() {
  return (
    <Box>
      <Header />
      <Herosection />
      <About />
      <SkinServices />
      <HairSection />
      <FAQSection/>
      <Footer />
    </Box>
  );
}

export default Home;
