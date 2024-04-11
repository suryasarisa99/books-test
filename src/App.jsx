import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "@app/Home/Home";
import Register from "@app/Register";
import PaymentPage from "@app/Payment/Payment";
import ProfilePage from "@app/Profile/Profile";
import WithdrawlPage from "@app/Withdrawl/Withdrawl";

function App() {
  useEffect(() => {
    window.addEventListener("load", () => {
      let metaThemeColor = document.querySelector("meta[name=theme-color]");
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        metaThemeColor.setAttribute("content", "#000000"); // Change this to the color you want for dark theme
      } else {
        metaThemeColor.setAttribute("content", "#FFFFFF"); // Change this to the color you want for light theme
      }
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/withdrawl" element={<WithdrawlPage />} />
    </Routes>
  );
}

export default App;
