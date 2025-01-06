// import React, { useEffect } from "react";
// import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";
// import { login } from "../redux/Features/AuthSlice";
// import { useNavigate } from "react-router-dom";

// const ProtectedRoutes = ({ children }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user, role, token, isLogged } = useSelector((state) => state.auth);

//   const storedToken = token || localStorage.getItem("token");
//   const UserId = localStorage.getItem("UserId");

//   const getRole = (id) => {
//     switch (id) {
//       case "1":
//         return "Admin";
//       case "2":
//         return "Vendor";
//       default:
//         return null;
//     }
//   };

//   useEffect(() => {
//     const fetchUser = async () => {
//       if (!storedToken || !UserId) {
//         navigate("/login"); // Redirect to login if no token or UserId
//         return;
//       }

//       try {
//         const url = "http://localhost:49814/Authentication/GetUserProfile";
//         const response = await axios.post(
//           `${url}?UserId=${UserId}`,
//           {},
//           {
//             headers: {
//               Authorization: `Bearer ${storedToken}`,
//             },
//           }
//         );

//         if (response.data.Code === 200) {
//           const { user, role: roleId } = response.data;
//           const newUserId = response.data.UserProfilesEntity[0].DesignationId;
//           localStorage.setItem("UserId", newUserId);

//           const userRole = getRole(roleId);

//           dispatch(
//             login({
//               user,
//               role: userRole,
//               token: storedToken,
//               UserId: newUserId,
//               isLogged: true,
//             })
//           );

//           navigate("/"); 
//         } else {
  
//           navigate("/login");
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         navigate("/login"); 
//       }
//     };

//     if (!user || !role || !isLogged) {
//       fetchUser();
//     }
//   }, [user, role, isLogged, storedToken, UserId, dispatch, navigate]);

//   return storedToken && UserId && isLogged ? children : null;
// };

// export default ProtectedRoutes;

import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/Features/AuthSlice";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, role, token, isLogged } = useSelector((state) => state.auth);

  const storedToken = token || localStorage.getItem("token");
  const UserId = localStorage.getItem("UserId");

  const getRole = (id) => {
    switch (id) {
      case "1":
        return "Admin";
      case "2":
        return "Vendor";
      default:
        return null;
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (!storedToken || !UserId) {
        console.log("Token or UserId not available. Redirecting to /login...");
        navigate("/login");
        return;
      }

      try {
        const url = "http://localhost:49814/Authentication/GetUserProfile";
        const response = await axios.post(
          `${url}?UserId=${UserId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );

        if (response.data.Code === 200) {
          console.log(response.data)
          console.log("User authenticated successfully.");
          
          const UserId = response.data.UserProfilesEntity[0].DesignationId;
           
          const userRole = getRole(UserId);

          dispatch(
            login({
              user : response.data.UserProfilesEntity[0].FirstName + " " +response.data.UserProfilesEntity[0].LastName,
              role: userRole,
              token: storedToken,
              UserId: UserId,
            })
          );
        } else {
          console.log(response.data);
          console.log("Authentication failed. Redirecting to /login...");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error during API call:", error);
        navigate("/login");
      }
    };

    if (!user || !role || !isLogged) {
      fetchUser();
    }
  }, [user, role, isLogged, storedToken, UserId, dispatch, navigate]);

  return storedToken && UserId && isLogged ? children : null;
};

export default ProtectedRoutes;
