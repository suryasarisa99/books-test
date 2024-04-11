import "./paymetn.scss";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import bankImg from "@public/bank.png";

export default function PaymentPage() {
  const [upi, setUpi] = useState("");
  const [hideSuggestions, setHideSuggestions] = useState(false);
  const suggestions = [
    { s: "okhdfcbank", k: 0 },
    { s: "okaxis", k: 1 },
    { s: "okicici", k: 2 },
    { s: "axl", k: 3 },
    { s: "ibl", k: 4 },
    { s: "ybl", k: 5 },
    { s: "paytm", k: 6 },
  ];
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);

  useEffect(() => {
    if (!upi.includes("@")) {
      setHideSuggestions(false);
    }
  }, [upi]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const filterSuggestions = suggestions.filter((sugg) =>
        sugg.s.includes(upi.split("@")[1])
      );
      const filterSuggestionsLen = filterSuggestions.length;
      console.log("len: ", filterSuggestionsLen);
      // setSelectedSuggestion(0);
      if (e.key === "ArrowDown") {
        setSelectedSuggestion((prev) => {
          if (prev === -1) {
            return 0;
          } else {
            return (prev + 1) % filterSuggestionsLen;
          }
        });
      } else if (e.key === "ArrowUp") {
        setSelectedSuggestion(
          (prv) => (prv - 1 + filterSuggestionsLen) % filterSuggestionsLen
        );
      } else if (e.key === "Enter") {
        if (selectedSuggestion !== -1) {
          console.log("HI");
          setUpi(
            upi.split("@")[0] + "@" + filterSuggestions[selectedSuggestion].s
          );
          setHideSuggestions(true);
        } else {
          console.log("No");
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [upi, selectedSuggestion]);

  return (
    <div className="payment-page page split-page">
      <div className="cross-bar"></div>
      <div className="left">
        <div className="heading">
          <p className="title">Payment</p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          transition={{ delay: 0.1, duration: 0.25 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="payment-option"
        >
          <p className="title">Upi Id :</p>
          <input
            type="text"
            placeholder="Enter Upi Id"
            value={upi}
            onChange={(e) => setUpi(e.target.value)}
          />
          {upi.includes("@") &&
            !hideSuggestions &&
            suggestions.filter((s) => s.s.includes(upi.split("@")[1])).length >
              0 && (
              <div className="suggestions">
                {suggestions
                  .filter((sugg) => sugg.s.includes(upi.split("@")[1]))
                  .map((sugg, sInd) => (
                    <p
                      className={
                        "item " +
                        (sInd === selectedSuggestion ? "selected" : "")
                      }
                      onClick={() => {
                        setUpi(upi.split("@")[0] + "@" + sugg.s);
                        setHideSuggestions(true);
                      }}
                      key={sugg.k}
                    >
                      {upi.split("@")[0] + "@" + sugg.s}
                    </p>
                  ))}
              </div>
            )}
        </motion.div>

        <p className="or">Or</p>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          transition={{ delay: 0.1, duration: 0.25 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="payment-option bank-details"
        >
          <div className="title">Bank Details :</div>
          <input type="text" placeholder="Enter Name" />
          <input type="number" placeholder="Enter Bank Account Number" />
          <input type="text" placeholder="Enter IFSC Code" />
          <input type="number" placeholder="Enter Mobile Number" />
        </motion.div>
        <div className="btn-row">
          <button className="submit">Submit</button>
        </div>
      </div>
      <div className="right">
        <img src={bankImg} alt="" />
      </div>
    </div>
  );
}
