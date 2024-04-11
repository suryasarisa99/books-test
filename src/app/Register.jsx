import "./auth.scss";
import logo from "@public/logo.png";
import registerImg from "@public/register2.png";
export default function Register() {
  return (
    <div className="register page split-page">
      <div className="cross-bar"></div>
      <div className="left">
        <div className="heading">
          <img src={logo} alt="logo" />
          <p className="title">One Novel</p>
        </div>

        <form>
          <input type="text" placeholder="Enter your name" />
          <input type="number" placeholder="Phone number" />
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <input type="text" placeholder="Referal code" />
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
