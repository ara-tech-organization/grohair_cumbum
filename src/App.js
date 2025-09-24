import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
=======

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
>>>>>>> gh-pages
import BookNow from "./Pages/Booknow";
import ThankYou from "./Components/Booknow/Thankyou";
import Hairtransplant from "./Pages/Hairtransplant";

function App() {
  return (
<<<<<<< HEAD
    <>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/hairtransplant" element={<Hairtransplant />} />
      </Routes>
    </>
=======
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/booknow" element={<BookNow />} />
      <Route path="/thankyou" element={<ThankYou />} />
      <Route path="/hairtransplant" element={<Hairtransplant />} />
    </Routes>
>>>>>>> gh-pages
  );
}

export default App;
