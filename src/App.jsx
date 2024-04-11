import { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "@app/Home/Home";
import Register from "@app/Register";
import PaymentPage from "@app/Payment/Payment";
import ProfilePage from "@app/Profile/Profile";
import WithdrawlPage from "@app/Withdrawl/Withdrawl";

function App() {
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
