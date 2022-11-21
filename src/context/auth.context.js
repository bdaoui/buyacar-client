import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

<<<<<<< HEAD
const API_URL = process.env.REACT_APP_API_URL || "https://erin-real-wombat.cyclic.app";
=======
const API_URL = process.env.REACT_APP_API_URL || "https://muddy-moth-top-hat.cyclic.app" ;
>>>>>>> 112190bb0ba2b6811842f7174aabc6f59fdf6397
 
const AuthContext = createContext();
 
function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
 
  const storeToken = (token) => {     
    localStorage.setItem('authToken', token);
  }
  
  const authenticateUser = () => {           
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      axios.get(
        `${API_URL}/admin/verify`, 
        { headers: { Authorization: `Bearer ${storedToken}`} }
      )
      .then((response) => { 
        const user = response.data;  
        setUser(user);          
        setIsLoggedIn(true);
        setIsLoading(false);   
      })
      .catch((error) => {     
        setUser(null);           
        setIsLoggedIn(false);
        setIsLoading(false); 
      });      
    } else {
        setUser(null);       
        setIsLoggedIn(false);
        setIsLoading(false);
    }   
  }
  
  const removeToken = () => {    
    localStorage.removeItem("authToken");
  }

  const logOutUser = () => {                
    removeToken();
    authenticateUser();
  }  
  
  useEffect(() => {                                    
    authenticateUser();                 
   }, []);

  return (                                                   
    <AuthContext.Provider 
      value={{ 
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logOutUser, 
        setUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
 
export { AuthProviderWrapper, AuthContext };