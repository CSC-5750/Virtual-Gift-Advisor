import logo from "../assets/images/AI-logo.png";
import { useState, useEffect } from "react";
import "./styles/Header.css";

const Header = () => {
  const [colorChange, setcolorChange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY > 0) {
      setcolorChange(true);
    } else {
      setcolorChange(false);
    }
  };

  useEffect(() => {
    changeNavbarColor();
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <div className={colorChange ? "header nav-bg-color" : "header"}>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navlist">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#aichat">AIChat</a>
          </li>
          <li>
            <a href="#giftcard">GiftCard</a>
          </li>
          <li>
            <a href="#trendinggifts">TrendingGifts</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
