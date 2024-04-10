import React, { useState } from "react";
import img2 from "@public/home/img2.png";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductPage() {
  return (
    <div className="product-page page">
      <motion.p
        // initial={{ y: -300 }}
        // animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        // whileInView={{ y: 100 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="title"
      >
        ECAPE INTO THE WORLD OF <span>&apos;JANNU&apos;</span>
      </motion.p>
      <motion.img
        initial={{ scale: 0.7 }}
        transition={{ duration: 0.2 }}
        whileInView={{ scale: 1 }}
        src={img2}
        alt="product page"
      />
      <button className="floating-btn">Buy Now</button>
    </div>
  );
}
