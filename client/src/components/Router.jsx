import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import Home from "./Home";
import AddStation from "./AddStation";

const Router = () => {
  const [token, setToken] = useState(null);
  
  useEffect(() => {
    !token ? setToken(localStorage.getItem("token")) : localStorage.setItem("token", token);
  }, [token])

  return (
    <Routes>
      <Route path="/" element={<Home token={token} setToken={setToken} />} />
      <Route path="/register" element={<RegisterForm token={token} setToken={setToken} />} />
      <Route path="/addStation" element={<AddStation token={token} />} />
    </Routes>
  );
};

export default Router;
