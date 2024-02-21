import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import ExerciseDetail from "./pages/ExerciseDetail";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Box width="400" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
