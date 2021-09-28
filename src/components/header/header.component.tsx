import React from "react";
import Logo from "../logo/logo.component";
import Button from "@material-ui/core/Button";

import "./header.styles.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <Logo />
      <div className="right-side">
        <Button
          variant="outlined"
          size="small"
          className="settings_button"
          onClick={(e) => navigate("/profile")}
        >
          <span>Profile & Settings</span>
        </Button>
        <Button
          variant="text"
          size="small"
          className="sign-in_button"
          onClick={(e) => {
            auth.signOut();
            sessionStorage.clear();
            navigate("/auth");
          }}
        >
          <span>log out</span>
        </Button>
      </div>
    </div>
  );
};

export default Header;
