import React, { useState } from "react";
import img3b from "@public/home/img3a.jpg";
import img3a from "@public/home/img3b.jpg";
import img3c from "@public/home/img3c.jpg";

export default function Page3() {
  return (
    <div className="page3 page">
      <div className="part1">
        <div className="row">
          <div className="column">
            <div className="img1">
              <img src={img3a} alt="img3a" />
            </div>
            <div className="img2">
              <img src={img3b} alt="img3b" />
            </div>
          </div>
          <div className="img3">
            <img src={img3c} alt="img3c" />
          </div>
        </div>
      </div>
      <div className="part2">
        <div className="part2-container">
          <div className="title">WHY ONE NOVEL ?</div>
          <div className="desc">
            Flexible Hours, Unlimited Earnings, One Novel&apos;s MLM Model Gives
            you the Freedom to Succed
          </div>
          <button className="floating-btn">JOIN NOW</button>
        </div>
      </div>
    </div>
  );
}
