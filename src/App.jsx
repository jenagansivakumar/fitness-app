import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import ExerciseDetail from "./pages/ExerciseDetail";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Box width="400">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
