import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import UniversityDetails from "./pages/university-details/university-details";
import NotFoundPage from "./pages/not-found-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/university-details/" element={<UniversityDetails />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
