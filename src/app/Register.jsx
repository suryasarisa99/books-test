import "./auth.scss";
import logo from "@public/logo.png";
import registerImg from "@public/register2.png";
import { motion } from "framer-motion";

export default function Register() {
  return (
    <div className="register split-page">
      <div className="cross-bar"></div>
      <div className="left">
        <div className="heading">
          <img src={logo} alt="logo" />
          <p className="title">One Novel</p>
        </div>

        <form>
          <motion.input
            initial={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            type="text"
            placeholder="Enter your name"
          />
          <motion.input
            initial={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.2, duration: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            type="number"
            placeholder="Phone number"
          />
          <motion.input
            initial={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.3, duration: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            type="email"
            placeholder="Enter your email"
          />
          <motion.input
            initial={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.4, duration: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            type="password"
            placeholder="Enter your password"
          />
          <motion.input
            initial={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.5, duration: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            type="text"
            placeholder="Referal code"
          />
          {/* <input type="password" placeholder="Confirm your password" /> */}
          <button type="submit">Register</button>
        </form>
      </div>
      <div className="right">
        <img src={registerImg} alt="register" />
      </div>
    </div>
  );
}
