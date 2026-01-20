import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RGCSAbout from "./blog/RGCSBlog";
import RGCSServices from "./blog/RGCSServices";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RGCSAbout />} />
        <Route path="/services" element={<RGCSServices />} />
      </Routes>
    </Router>
  );
}

export default App;
