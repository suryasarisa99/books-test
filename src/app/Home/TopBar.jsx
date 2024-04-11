import { Link } from "react-router-dom";
import logo from "@public/logo.png";
import { FaRegUser, FaUser } from "react-icons/fa";
import { IoWalletOutline, IoWallet } from "react-icons/io5";
export default function TopBar() {
  return (
    <nav>
      <img src={logo} className="logo" alt="" />
      <ul className="menu">
        <li>
          <Link to="/profile">
            <FaRegUser className="outline" size={22} />
            <FaUser className="fill" size={22} />
          </Link>
        </li>

        <li className="wallet">
          <IoWalletOutline size={24} className="outline" />
          <IoWallet size={24} className="fill" />
          <div className="wallet-box">
            <p className="balance">
              Balance:
              <span className="amount"> $5000</span>
            </p>
            <button className="withdrawl-btn">With Drawl</button>
          </div>
        </li>
        <li className="long-elm">
          <a href="#about">About</a>
        </li>
      </ul>
    </nav>
  );
}
