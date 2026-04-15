import React from "react";
import Button from "./ui/BUtton";

const Navbar = () => {
  const isSignedIn = false;
  const username = "Nur";
  const handleAuthClick = () => {
    // Implement your authentication logic here
    console.log("Authentication button clicked");
  };
  return (
    <div className="navbar">
      <nav className="inner">
        <div className="left">
          <div className="logo">
            <span className="name">Quixoai</span>
          </div>
          <ul className="links">
            <a href="#">Product</a>
            <a href="#">Pricing</a>
            <a href="#">Community</a>
            <a href="#" className="btn">
              EnterPrise
            </a>
          </ul>
        </div>
        <div className="actions">
          {isSignedIn ? (
            <>
              <span className="greeting">
                {username ? `Hi, ${username}!` : "Signed in"}
              </span>
              <Button size="sm" onClick={handleAuthClick} className="btn">
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button onClick={handleAuthClick} size="sm" variant="ghost">
                Log In
              </Button>

              <a href="#upload" className="cta">
                Get Started
              </a>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
