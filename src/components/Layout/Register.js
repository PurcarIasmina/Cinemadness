import React from "react";
import classes from './Register.module.css';
import {StyledContainer,StyledTextInput,Avatar,StyledFormArea,StyledTitle,StyledSubTitle,StyledButton} from './Style';
import logo from '../../assets/logo.png';
import emailLogo from '../../assets/email.png';
import passwordLogo from '../../assets/password.png';
import nameLogo from '../../assets/name.png';
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
                        <StyledTitle size={30} color={"red"}>Register in </StyledTitle>
                    </div>
                    <Formik>
                        {() =>
                        (
                            <Form style={{marginTop: 30}}>
                                <div className={classes.imageAndField}>
                                    <img className={classes.fieldsLogo} src={nameLogo} align="left" alt=""></img>
                                    <TextInput name="fname" type="text" placeholder="First Name"/>
                                </div>
                                <div className={classes.imageAndField}>
                                    <img className={classes.fieldsLogo} src={nameLogo} align="left" alt=""></img>
                                    <TextInput name="lname" type="text" placeholder="Last Name"/>
                                </div>
                                <div className={classes.imageAndField}>
                                    <img className={classes.fieldsLogo} src={emailLogo} align="left" alt=""></img>
                                    <TextInput name="email" type="text" placeholder="Email"/>
                                </div>
                                <div className={classes.imageAndField}>
                                    <img className={classes.fieldsLogo} src={passwordLogo} align="left" alt=""></img>
                                    <TextInput name="password" type="password" placeholder="Password"/>
                                </div>
                                <div className={classes.imageAndField} style={{marginBottom: 25}}>
                                    <img className={classes.fieldsLogo} src={passwordLogo} align="left" alt=""></img>
                                    <TextInput name="cpassword" type="password" placeholder="Confirm Password"/>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <StyledButton to="/register">Create</StyledButton>
                    <StyledSubTitle className={classes.accountQuestion} size={15}>Already have an account?</StyledSubTitle>
                    <StyledButton to="/login">Log in</StyledButton>
                </StyledFormArea>
            </StyledContainer>
        </div>
    );
}
export default Register;