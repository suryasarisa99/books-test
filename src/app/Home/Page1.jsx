import React, { useState } from "react";
import img1 from "@public/home/img1.jpg";
import { motion, AnimatePresence } from "framer-motion";
import TopBar from "./TopBar";
export default function HomePage() {
  return (
    <div className="home-page page">
      <TopBar />
      <motion.p
        initial={{ opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.2 }}
        whileInView={{ opacity: 1 }}
        className="title"
      >
        WELECOME TO ONE NOVEL WHERE EVERY PAGE TELLS A STORY
      </motion.p>

      <motion.img
        className="main-img"
        // initial={{ filter: "blur(0px)" }}
        // transition={{ duration: 0.5 }}
        // whileInView={{ filter: "blur(3px)" }}
        src={img1}
        alt="home page"
      />
      <motion.button
        initial={{ opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.2 }}
        whileInView={{ opacity: 1 }}
        className="floating-btn"
      >
        JOIN NOW
      </motion.button>
    </div>
  );
}
