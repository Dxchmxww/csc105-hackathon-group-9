import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import RandomCard from "./pages/RandomMajorcard.jsx";
import Card from "./pages/Card.jsx";
import Category from "./pages/Category.jsx";
import HistoryComponent from './pages/History'
import RandomMajorcard from './pages/RandomMajorcard'
import RandomGoldencard from './pages/RandomGlodencard'
import RandomSubcard from './pages/RandomSubcard'


function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/randomcard" element={<RandomCard />} />
        <Route path="/card" element={<Card />} />
        <Route path="/category" element={<Category />} />
        <Route path="/history" element={<HistoryComponent />} />
        <Route path="/randommajorcard" element={<RandomMajorcard />} />
        <Route path="/randomgoldencard" element={<RandomGoldencard />} />
        <Route path="/randomsubcard" element={<RandomSubcard />} />
      </Routes>
  );
}

export default App;
