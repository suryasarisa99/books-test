import React, { useState } from "react";
import img2 from "@public/home/img2.png";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function ProductPage() {
  const navigate = useNavigate();
  return (
    <div className="product-page page" id="product">
      <motion.p
        initial={{ opacity: 0, y: 60 }}
        transition={{ delay: 0.3, duration: 0.25 }}
        whileInView={{ opacity: 1, y: 0 }}
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        className="title"
      >
        ESCAPE INTO THE WORLD OF <span>&apos;JANNU&apos;</span>
      </motion.p>
      <motion.img
        initial={{ scale: 0.7, y: 100 }}
        transition={{ duration: 0.2 }}
        whileInView={{ scale: 1, y: 0 }}
        whileTap={{ scale: [1, 0.75, 1] }}
        src={img2}
        draggable={false}
        alt="product page"
      />
      <motion.button
        initial={{ opacity: 0, y: 100 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="floating-btn"
        onClick={() => navigate("/payment")}
      >
        Buy Now
      </motion.button>
    </div>
  );
}
