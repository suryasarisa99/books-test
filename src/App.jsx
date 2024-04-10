import { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "@app/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
