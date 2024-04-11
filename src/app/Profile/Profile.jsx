import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { FaChevronRight } from "react-icons/fa";

import { LuClipboard } from "react-icons/lu";
import { LuClipboardCheck } from "react-icons/lu";

import "./profile.scss";
export default function ProfilePage() {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div className="profile-page page split-page">
      <div className="left">
        <div className="left-container">
          <div className="bio">
            <div className="name field">
              <span className="label">Name</span>
              <span className="value">Spider Man</span>
            </div>
            <div className="email field">
              <span className="label">Email</span>
              <span className="value">spider@gmail.com</span>
            </div>
            <div className="phone field">
              <span className="label">Phone</span>
              <span className="value">+91 9876543210</span>
            </div>
          </div>
          <div className="details">
            <div className="balance field">
              <span className="value">₹ 1234</span>
              <span className="label">Balance</span>
            </div>

            <div className="transactions field">
              <span className="value">₹ 10000</span>
              <span className="label">Withrawn</span>
            </div>
            <div className="transactions field">
              <span className="value">₹ 5000</span>
              <span className="label">Pending</span>
            </div>
            <div className="referals field">
              <span className="value">12</span>
              <span className="label">Referals</span>
            </div>
            <div className="transactions field">
              <span className="value">12</span>
              <span className="label">Transactions</span>
            </div>
          </div>
          <div className="refer-code-box">
            <div className="title">
              <span>Referal Code</span>
              <motion.div
                className="icon"
                whileTap={{ scale: 0.4 }}
                onClick={() => {
                  navigator?.clipboard?.writeText("s8-12348");
                  setIsCopied(true);
                  setTimeout(() => {
                    setIsCopied(false);
                  }, 1000);
                }}
              >
                {isCopied ? <LuClipboardCheck /> : <LuClipboard />}
              </motion.div>
            </div>
            <div className="value">s8-12348</div>
          </div>

          <div className="section">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              transition={{ dealy: 0, duration: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="item"
            >
              <span className="label">Transactions</span>
              <FaChevronRight />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              transition={{ dealy: 0.1, duration: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="item"
            >
              <span className="label">Parents</span>
              <FaChevronRight />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              transition={{ dealy: 0.2, duration: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="item"
            >
              <span className="label">Children</span>
              <FaChevronRight />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              transition={{ dealy: 0.3, duration: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="item"
            >
              <span className="label">Referals</span>
              <FaChevronRight />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              transition={{ dealy: 0.4, duration: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="item"
            >
              <span className="label">SignOut</span>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="cross-bar"></div>
      <div className="right"></div>
    </div>
  );
}
