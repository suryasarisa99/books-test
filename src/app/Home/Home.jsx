import React, { useEffect, useState } from "react";
import HomePage from "./Page1";
import ProductPage from "./Page2";
import Page3 from "./Page3";
import AboutPage from "./Page4";
import "./home.scss";
import Page5 from "./page5";
import TopBar from "./TopBar";

export default function Home() {
  useEffect(() => {
    function handleZoom() {
      console.log("zoom");
      // find which page is in view
      const item = {
        id: "none",
        top: 99999,
      };
      const pages = document.querySelectorAll(".home-page-section");
      for (let page of pages) {
        const rect = page.getBoundingClientRect();
        if (item.top > Math.abs(rect.top)) {
          item.id = page.id;
          item.top = Math.abs(rect.top);
        }
      }
      console.log(item.id);
      if (item.id != "none") {
        const page = document.getElementById(item.id);
        page.scrollIntoView({ behavior: "instant" });
      }
    }
    window.addEventListener("resize", handleZoom);
  }, []);
  return (
    <div className="home">
      <HomePage />
      <ProductPage />
      <Page3 />
      <AboutPage />
    </div>
  );
}
