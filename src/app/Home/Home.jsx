import React, { useState } from "react";
import HomePage from "./Page1";
import ProductPage from "./Page2";
import Page3 from "./Page3";
import AboutPage from "./Page4";
import "./home.scss";
import Page5 from "./page5";
import TopBar from "./TopBar";

export default function Home() {
  return (
    <div className="home">
      <HomePage />
      <ProductPage />
      <Page3 />
      <AboutPage />
      <Page5 />
    </div>
  );
}
