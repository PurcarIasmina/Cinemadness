import React from "react";
import classes from './Register.module.css';
import {StyledContainer,StyledTextInput,Avatar,StyledFormArea,StyledTitle,StyledSubTitle,StyledButton} from './Style';
import logo from '../../assets/logo.png';
import { Formik ,Form} from "formik";
import { TextInput} from "./FormLib";


function Register()
{
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
                    <TextInput name="fname" type="text" placeholder="First Name"/>
                    <TextInput name="lname" type="text" placeholder="Last Name"/>
                    <TextInput name="email" type="text" placeholder="Email"/>
                    <TextInput name="password" type="password" placeholder="Password"/>
                    <TextInput name="cpassword" type="password" placeholder="Confirm Password"/>



                </Form>
            )
            
            }
       
            </Formik>
            <StyledButton to="/register">Create</StyledButton>
        <StyledSubTitle size={15}>Already have an account?</StyledSubTitle>
        <StyledButton to="/login">Log in</StyledButton>

        </StyledFormArea>
        </StyledContainer>
        </div>
    );
}
export default Register;