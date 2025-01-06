

import  { useEffect } from "react";
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
         
      
          navigate("/login");
        }
      } catch (error) {
    
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
