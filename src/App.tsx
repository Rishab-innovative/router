import React from "react";
import "./App.css";
import Message from "./Message";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
