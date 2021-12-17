import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./component/Sidebar";
import GenerateCard from "./component/GenerateCard";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./component/Home";
import Footer from "./component/Footer";


export default function App() {
  return (
    <>
      <Router>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Sidebar />
          <Box sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/generateCard" element={<GenerateCard />} />
            </Routes>
            <Footer />
          </Box>
        </Box>
      </Router>
    </>
  );
}
