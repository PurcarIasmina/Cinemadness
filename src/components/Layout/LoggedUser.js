import React, { useEffect } from "react";
import classes from './Register.module.css';
import axios from "axios";
import {StyledContainer,StyledTextInput,Avatar,StyledFormArea,StyledTitle,StyledSubTitle,StyledButton} from './Style';
import { useState } from "react";
function LoggedUser()
{   const [loginStatus, setLoginStatus] = useState("");

useEffect( ()=>
    {  getLoggedUser();
       
        
    },[]);

axios.defaults.withCredentials = true;
    const getLoggedUser=async()=>{await axios.get("http://localhost:3007/login").then((response) => {
      if (response.data.loggedIn == true) {
          console.log(response.data.loggedIn);
        setLoginStatus(response.data.user[0].lname);
      }
    });}
    return(
<div>
    <StyledTitle>{loginStatus}</StyledTitle>
</div>
    );
}
export default LoggedUser;