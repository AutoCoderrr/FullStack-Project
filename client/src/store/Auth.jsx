import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services, setServices] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const authorizationToken = `Bearer ${token}`;

  const storeTokenInLocalStorage = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let loggedIn = !!token; //if token is true or false
  console.log("islogged in ", loggedIn);
  //handelling the logout feature

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  //jwt authentication to the currently logged in user data

  const userAuthentication = async () => {
    try {
      setisLoading(true); //this is for admin to check
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
          //the value  is storeed above
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
        setisLoading(false);
        console.log(data.userData);
      } else {
        setisLoading(false);
      }
    } catch (error) {
      console.log("error fetching data ");
    }
  };
  //to fetch the sevices data from database
  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
      
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        setServices(data.message);
      }
    } catch (error) {
      console.log(error, "error fetching services ");
    }
  };

  useEffect(() => {
    //to get the services data
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        storeTokenInLocalStorage,
        LogoutUser,
        user,
        services,
        authorizationToken,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth outside of the provider ");
  }
  return authContextValue;
};
// export default useAuth;
