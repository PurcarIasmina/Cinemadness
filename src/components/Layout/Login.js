import React from "react";
import classes from './Register.module.css';
import {StyledContainer,StyledTextInput,Avatar,StyledFormArea,StyledTitle,StyledSubTitle,StyledButton} from './Style';
import logo from '../../assets/logo.png';
import { Formik ,Form} from "formik";
import { TextInput} from "./FormLib";
function Login()
{
    return(
        <div>
        <StyledContainer>
          
        <StyledFormArea>
            <div>
        <img className={classes.logo} src={logo} align="left" alt=""></img>
     <StyledTitle size={30} color={'red'}>Log in </StyledTitle>
        </div>
       <Formik>
            {() =>
            (
                <Form>
                   
                    <TextInput name="email" type="text" placeholder="Email"/>
                    <TextInput name="password" type="password" placeholder="Password"/>
               



                </Form>
            )
            
            }
       
            </Formik>
            <StyledButton to="/login">Log in</StyledButton>
        <StyledSubTitle size={15}>Don't have an account?</StyledSubTitle>
        <StyledButton to="/register">Register in</StyledButton>

        </StyledFormArea>
        </StyledContainer>
        </div>
    );
}
export default Login;