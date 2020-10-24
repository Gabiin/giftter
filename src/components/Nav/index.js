import React from "react";
import { Link, useRoute } from "wouter";
import useUser from "../../hooks/useUser";
import "./nav.css";

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  nav.classList.toggle("nav-active");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
    }
  });

  burger.classList.toggle("toggle");
};

const ActiveLink = (props) => {
  const [isActive] = useRoute(props.href);
  return (
    <Link {...props}>
      <a href="/#" className={isActive ? "active" : ""}>
        {props.children}
      </a>
    </Link>
  );
};

const Nav = ({ props }) => {
  const { isLogged, logout } = useUser();
  const handleLogoutClick = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/home">
          <a href="/#">
            <h4>Giftter</h4>
          </a>
        </Link>
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
      <div className="burger" onClick={navSlide}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Nav;
