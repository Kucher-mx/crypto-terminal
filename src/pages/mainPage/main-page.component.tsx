import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../../components/header/header.component";

const Main = () => {
  const navigator = useNavigate();
  const user = sessionStorage.getItem("userData");
  console.log("main user", user);
  useEffect(() => {
    if (!user) {
      navigator("/auth");
    }
  }, [navigator, user]);

  // if (!user) {
  //   navigator("/auth");
  // }

  return (
    <div>
      <Header />
    </div>
  );
};

export default Main;
