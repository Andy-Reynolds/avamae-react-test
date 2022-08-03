import { Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home";
import { useState, useEffect } from "react";

function App() {
  const [homeObj, setHomeObj] = useState({});

  const url =
    "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details";

  const getData = async () => {
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    setHomeObj(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home homeObj={homeObj} />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
