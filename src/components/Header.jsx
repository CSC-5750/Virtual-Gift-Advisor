import logo from "../assets/images/AI-logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // Add this import
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
          <Link to="/" className="nav-link">  
          Home
          </Link>
          </li>
          <li>
            <Link to="/quiz" className="nav-link">
              Quiz
            </Link>
          </li>
          <li>
            <Link to="results" className="nav-link">
            Results
            </Link>
          </li>
          <li>
            <Link to="trendinggifts" className="nav-link">
            TrendingGifts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;