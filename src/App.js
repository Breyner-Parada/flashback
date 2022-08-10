import React from "react";
import { Container } from "@mui/material";
import { Navbar } from "./Components/Navbar.js";
import { Home } from "./Components/Home.js";
import { Auth } from "./Components/Auth/Auth.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter forceRefresh={false}>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/flashback" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
