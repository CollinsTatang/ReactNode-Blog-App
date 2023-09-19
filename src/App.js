import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Post from "./Pages/Post";
import About from "./Pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Write from "./Pages/Write";
import './App.css';

function App() {
  return (
    <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post" element={<Post />} />
          <Route path="/write" element={<Write />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
