import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Header() {
  const [error, setError] = useState("");
  const { logout, currentUser } = useAuth();
  const history = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to log out");
      console.log(error);
    }
  }

  return (
    <div className="header-container">
      <Link to="/">ＧＡＭＩＬＡ ＳＥＣＲＥＴ</Link>
      <div className="header-container_left">
        <Link to="/contact-us">Contact Us</Link>
        {currentUser ? (
          <Link to="/" onClick={handleLogout}>
            Log out
          </Link>
        ) : (
          <Link to="/login">Log in</Link>
        )}
      </div>
    </div>
  );
}

export default Header;