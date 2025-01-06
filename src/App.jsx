

import React , {useState} from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation, Routes, Route } from "react-router-dom";
import MainLayoutBox from "./Component/MainLayoutBox";
import LoginForm from "./Pages/Login/Login";

import dayjs from 'dayjs';
const App = () => {
  const { token, isLogged } = useSelector((state) => state.auth);
  const storedToken = token || localStorage.getItem("token");
  const [value, setValue] = useState(dayjs('2022-04-17')); 

  const location = useLocation();

  if (location.pathname === "/login") {

    return <LoginForm />;
  }
  if (!storedToken) {

    return <Navigate to="/login" replace />;
  }
  return   <MainLayoutBox />;
};

export default App;
