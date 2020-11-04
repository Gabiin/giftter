import React, { useState } from "react";
import { Link, useRoute } from "wouter";

//Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars as BurgerIcon } from "@fortawesome/free-solid-svg-icons/faBars";
import { faTimes as CloseIcon } from "@fortawesome/free-solid-svg-icons/faTimes";

//custom hook
import useUser from "../../hooks/useUser";

//css
import "./nav.css";

const Nav = ({ props }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { isLogged, logout } = useUser();
  const handleLogoutClick = (e) => {
    e.preventDefault();
    logout();
  };

  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
    setShowMenu(!showMenu);
  };

  const ActiveLink = (props) => {
    const [isActive] = useRoute(props.href);
    return (
      <Link {...props} onClick={linkClick}>
        <a href="/#" className={isActive ? "active" : ""}>
          {props.children}
        </a>
      </Link>
    );
  };

  const linkClick = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    nav.classList.remove("nav-active");
    burger.classList.remove("toggle");
    setShowMenu(false);
  };

  return (
    <>
      <nav className="nav">
        <div className="logo">
          <Link to="/home">
            <h1>
              <a href="/#">Giftter</a>
            </h1>
          </Link>
        </div>
        <div className="burger" onClick={navSlide}>
          <FontAwesomeIcon icon={!showMenu ? BurgerIcon : CloseIcon} />
        </div>
        <ul className="nav-links">
          <li>
            <ActiveLink href="/home">Home</ActiveLink>
          </li>
          {isLogged ? (
            <>
              <li>
                <ActiveLink href="/mygiftter">My Giftter</ActiveLink>
              </li>
              <li>
                <ActiveLink href="/profile">Profile</ActiveLink>
              </li>
              <li>
                <Link to="/#" onClick={handleLogoutClick}>
                  <a href="/#">Logout</a>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <ActiveLink href="/register">Register</ActiveLink>
              </li>
              <li>
                <ActiveLink href="/login">Login</ActiveLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
