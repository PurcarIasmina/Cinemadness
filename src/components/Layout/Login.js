import React from "react";
import classes from './Register.module.css';
import {StyledContainer,StyledTextInput,Avatar,StyledFormArea,StyledTitle,StyledSubTitle,StyledButton} from './Style';
import logo from '../../assets/logo.png';
import emailLogo from '../../assets/email.png';
import passwordLogo from '../../assets/password.png';
import {Formik ,Form} from "formik";
import {TextInput} from "./FormLib";
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
                        <Form style={{marginTop: 30}}>
                            <div className={classes.imageAndField}>
                                <img className={classes.fieldsLogo} src={emailLogo} align="left" alt=""></img>
                                <TextInput name="email" type="text" placeholder="Email"/>
                            </div>
                            <div className={classes.imageAndField} style={{marginBottom: 25}}>
                                <img className={classes.fieldsLogo} src={passwordLogo} align="left" alt=""></img>
                                <TextInput name="password" type="password" placeholder="Password"/>
                            </div>
                        </Form>
                    )}
                </Formik>
                <StyledButton to="/login">Log in</StyledButton>
                <StyledSubTitle className={classes.accountQuestion} size={15}>Don't have an account?</StyledSubTitle>
                <StyledButton to="/register">Register in</StyledButton>
            </StyledFormArea>
        </StyledContainer>
        </div>
    );
}
export default Login;