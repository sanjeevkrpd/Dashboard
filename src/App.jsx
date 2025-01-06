

// import MainLayoutBox from "./Component/MainLayoutBox";

// import { useDispatch , useSelector } from "react-redux";

// import { Navigate } from "react-router-dom";

// const App = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user, role, token, isLogged , UserId } = useSelector((state) => state.auth);

//   const storeToken = token || localStorage.getItem("token");
//   const storeUserId = UserId || localStorage.getItem(UserId);
   
//   if(!isLogged){
    
//     if(storeToken && storeUserId){
//       return (
//         <>
//           <MainLayoutBox/>
//         </>
//       )
//     } return ( 
//         <>
//           <Navigate to='/login'/>
//         </>
//     );

//   }

 
// };

// export default App;





// import React from "react";
// import MainLayoutBox from "./Component/MainLayoutBox";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// const App = () => {
//   const { token, UserId, isLogged } = useSelector((state) => state.auth);

//   // Retrieve token and UserId from localStorage if not present in Redux state
//   const storedToken = token || localStorage.getItem("token");
//   const storedUserId = UserId || localStorage.getItem("UserId");

//   if (!storedToken || !storedUserId) {
//     // If no valid token or UserId exists, redirect to login
//     return <Navigate to="/login" replace />;
//   }

//   if (isLogged && storedToken && storedUserId) {
//     // If logged in and token/UserId exists, show the main layout
//     return <MainLayoutBox />;
//   }

//   // Fallback in case of any unexpected state
//   return <Navigate to="/login" replace />;
// };

// export default App;

// import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate, useLocation } from "react-router-dom";
// import MainLayoutBox from "./Component/MainLayoutBox";
// import LoginForm from "./Pages/Login/Login";

// const App = () => {
//   const { token, isLogged } = useSelector((state) => state.auth);
//   const storedToken = token || localStorage.getItem("token");

//   const location = useLocation();

//   if (!storedToken) {
 
//     if (location.pathname !== "/login") {
//       return <Navigate to="/login" replace />;
//     }
//     return <LoginForm />;
//   }


//   return <MainLayoutBox />;
// };

// export default App;


import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation, Routes, Route } from "react-router-dom";
import MainLayoutBox from "./Component/MainLayoutBox";
import LoginForm from "./Pages/Login/Login";

const App = () => {
  const { token, isLogged } = useSelector((state) => state.auth);
  const storedToken = token || localStorage.getItem("token");

  const location = useLocation();

  if (location.pathname === "/login") {

    return <LoginForm />;
  }
  if (!storedToken) {

    return <Navigate to="/login" replace />;
  }
  return <MainLayoutBox />;
};

export default App;
