import React from "react";
import classes from './Register.module.css';
import {StyledContainer,StyledTextInput,Avatar,StyledFormArea,StyledTitle,StyledSubTitle,StyledButton} from './Style';
import logo from '../../assets/logo.png';
import { Formik ,Form} from "formik";
import { TextInput} from "./FormLib";
import {useState} from "react";
import { Axios  } from "axios";
function Register()
{
    const [fname, setFname]=useState("");
    const [lname, setLname]=useState("");
    const [email, setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [cpassword,setCpassword]=useState("");
    // const displayInfo=()=> {
    
    //     console.log(fname+lname+email+password);
    // };
    const addUser=()=>{
        console.log(fname);
    Axios.post("http://localhost:3001/create",{fname:fname,lname:lname,email:email,password:password, cpassword:cpassword}).then(()=>{console.log("Ok")});
    

};
    return(
        <div>
        <StyledContainer>
          
        <StyledFormArea>
            <div>
        <img className={classes.logo} src={logo} align="left" alt=""></img>
     <StyledTitle size={30} color={'red'}>Register in </StyledTitle>
        </div>
       <Formik>
            {() =>
            (
                <Form>
                    <TextInput name="fname" onChange={(event)=> {setFname(event.target.value)}} type="text" placeholder="First Name"/>
                    <TextInput name="lname"  onChange={(event)=> {setLname(event.target.value)}}type="text" placeholder="Last Name"/>
                    <TextInput name="email"  onChange={(event)=> {setEmail(event.target.value)}}type="text" placeholder="Email"/>
                    <TextInput name="password"  onChange={(event)=> {setPassword(event.target.value)}}type="password" placeholder="Password"/>
                    <TextInput name="cpassword"   onChange={(event)=> {setCpassword(event.target.value)}}type="password" placeholder="Confirm Password"/>



                </Form>
            )
            
            }
       
            </Formik>
            <StyledButton  to="/register">Create</StyledButton>
        <StyledSubTitle size={15}>Already have an account?</StyledSubTitle>
        <StyledButton to="/login">Log in</StyledButton>

        </StyledFormArea>
        </StyledContainer>
        </div>
    );
}
export default Register;