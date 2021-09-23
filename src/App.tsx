import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/auth.components";
import Main from "./pages/mainPage/main-page.component";
import NotFound from "./pages/not-found/not-found.component";
import Profile from "./pages/profile/profile.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
