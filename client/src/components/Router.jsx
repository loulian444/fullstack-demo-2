import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import Home from "./Home";

const Router = () => {
  const [token, setToken] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Home token={token} setToken={setToken} />} />
      <Route path="/register" element={<RegisterForm token={token} setToken={setToken} />} />
    </Routes>
  );
};

export default Router;
