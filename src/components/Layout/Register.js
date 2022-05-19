import React from "react";
import classes from './Register.module.css';
import {StyledContainer,StyledTextInput,Avatar,StyledFormArea,StyledTitle,StyledSubTitle,StyledButton} from './Style';
import logo from '../../assets/logo.png';
import emailLogo from '../../assets/email.png';
import passwordLogo from '../../assets/password.png';
import nameLogo from '../../assets/name.png';
import { Formik ,Form} from "formik";
import { TextInput} from "./FormLib";
import {useState} from "react";
import axios   from "axios";

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
        //console.log(fname);
    axios.post("http://localhost:3003/create",{fname:fname,lname:lname,email:email,password:password, cpassword:cpassword},{

        headers: {

            'Content-Type' : 'application/json'

        }

    }).then(()=>{console.log("Ok")});
    

};
    return(
        <div>
          <StyledContainer>
                <StyledFormArea>
                    <div>
                        <img className={classes.logo} src={logo} align="left" alt=""></img>
                        <StyledTitle size={30} color={"red"}>Register in </StyledTitle>
                    </div>
                    <Formik>
                        {() =>
                        (
                            <Form style={{marginTop: 30}}>
                                <div className={classes.imageAndField}>
                                    <img className={classes.fieldsLogo} src={nameLogo} align="left" alt=""></img>
                                    <TextInput name="fname" onChange={(event)=> {setFname(event.target.value)}} type="text" placeholder="First Name"/>
                                </div>
                                <div className={classes.imageAndField}>
                                    <img className={classes.fieldsLogo} src={nameLogo} align="left" alt=""></img>
                                    <TextInput name="lname" onChange={(event)=> {setLname(event.target.value)}} type="text" placeholder="Last Name"/>
                                </div>
                                <div className={classes.imageAndField}>
                                    <img className={classes.fieldsLogo} src={emailLogo} align="left" alt=""></img>
                                    <TextInput name="email" onChange={(event)=> {setEmail(event.target.value)}} type="text" placeholder="Email"/>
                                </div>
                                <div className={classes.imageAndField}>
                                    <img className={classes.fieldsLogo} src={passwordLogo} align="left" alt=""></img>
                                    <TextInput name="password" onChange={(event)=> {setPassword(event.target.value)}} type="password" placeholder="Password"/>
                                </div>
                                <div className={classes.imageAndField} style={{marginBottom: 25}}>
                                    <img className={classes.fieldsLogo} src={passwordLogo} align="left" alt=""></img>
                                    <TextInput name="cpassword" onChange={(event)=> {setCpassword(event.target.value)}} type="password" placeholder="Confirm Password"/>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <StyledButton onClick={(event) => {addUser()}} to="/register">Create</StyledButton>
                    <StyledSubTitle className={classes.accountQuestion} size={15}>Already have an account?</StyledSubTitle>
                    <StyledButton to="/login">Log in</StyledButton>
                </StyledFormArea>
            </StyledContainer>
        </div>
    );
}
export default Register;