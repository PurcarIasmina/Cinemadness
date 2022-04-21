import React from "react";
import classes from './Register.module.css';
import {StyledContainer,StyledTextInput,Avatar,StyledFormArea} from './Style';
import logo from '../../assets/logo.png';
import { Formik ,Form} from "formik";
import { TextInput } from "./FormLib";
function Register()
{
    return(
        <div>
        <StyledContainer>
        <StyledFormArea>
        <Avatar image={logo}/>
          
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
        
        </StyledFormArea>
        </StyledContainer>
        </div>
    );
}
export default Register;