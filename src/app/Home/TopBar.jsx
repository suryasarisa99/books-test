import { Link } from "react-router-dom";
import logo from "@public/logo.png";
export default function TopBar() {
  return (
    <nav>
      <img src={logo} className="logo" alt="" />
      <ul className="menu">
        <li>
          <Link to="/product">Profile</Link>
        </li>
        <li>
          <Link to="/page3">Refer</Link>
        </li>
        <li>
          <Link to="/about">Wallet</Link>
        </li>
        <li className="long-elm">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
