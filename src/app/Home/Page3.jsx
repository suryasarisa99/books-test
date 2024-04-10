import React, { useState } from "react";
import img3b from "@public/home/img3a.jpg";
import img3a from "@public/home/img3b.jpg";
import img3c from "@public/home/img3c.jpg";

export default function Page3() {
  return (
    <div className="page3 page">
      <div className="part1"></div>
      <div className="cross-bar"></div>
      <div className="part2"></div>
      <div className="row">
        <div className="column">
          <img src={img3a} className="img1" alt="img3a" />
          <img src={img3b} className="img2" alt="img3b" />
        </div>
        <img className="img3" src={img3c} alt="img3c" />
      </div>
      <div className="part2-container">
        <div className="title">WHY ONE NOVEL ?</div>
        <div className="desc">
          Flexible Hours, Unlimited Earnings, One Novel&apos;s MLM Model Gives
          you the Freedom to Succed
        </div>
        <button className="floating-btn">JOIN NOW</button>
      </div>
    </div>
  );
}
