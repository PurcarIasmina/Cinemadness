import React, { useState } from "react";
import classes from './Register.module.css';
import {StyledContainer,StyledTextInput,Avatar,StyledFormArea,StyledTitle,StyledSubTitle,StyledButton,StyledButtonWLink, StyledLabel,FieldError,FormError} from './Style';
import logo from '../../assets/logo.png';
import emailLogo from '../../assets/email.png';
import passwordLogo from '../../assets/password.png';
import {Formik ,Form,useFormik} from "formik";
import {TextInput} from "./FormLib";
 import axios from "axios";
 import {useNavigate} from 'react-router-dom';
 import * as yup from "yup";

function Login()
{
    axios.defaults.withCredentials = true;
    const navigator=useNavigate();
     var message="";
     const [success, setSuccess] = useState(null);
    const [error,setError]=useState(null);
   
    const logUser=()=>{
        //console.log(fname);

    axios.post("http://localhost:3007/verifyaccount",{email:formik.values.email,password:btoa(formik.values.password)},{

        headers: {

            'Content-Type' : 'application/json'

        }

    }).then((result)=>

        {   if(result.status===200)
           { 
            navigator("/");}
        }).catch((err)=>{
            console.log()
            if(err.response.status===300)
            {
                setError("Invalid credentials!");
                setSuccess(null);
            }
           })
    };
  
    const validationSchema = yup.object({
        
        email: yup.string().email("Please enter a valid email address").required("Email is required!"),
        password: yup
          .string().required("Password is required!"),
        
      });
    const formik=useFormik(
    {   initialValues:{
            email:'',
            password:''
        },
        
        onSubmit: values =>
        {
            console.log(values);
        },
        validateOnBlur:true,
        validationSchema:validationSchema,
        

        
    })
    return(
        <div>
        <StyledContainer>
            <StyledFormArea>
            
                <div>
                    <img className={classes.logo} src={logo} align="left" alt=""></img>
                    <StyledTitle size={30} color={'red'}>Log in </StyledTitle>
                </div>
                {!success && <FormError>{error ? error : ""}</FormError>}
                <Formik >
                    {() =>
                    (     

                        <Form style={{marginTop: 30}} onSubmit={formik.handleSubmit}>
                           <FieldError>{formik.touched.email && formik.errors.email  ? formik.errors.email :""}</FieldError>
                            <div className={classes.imageAndField}>
                                <img className={classes.fieldsLogo}  src={emailLogo} align="left" alt=""></img>
                                <TextInput  value={formik.values.email} onBlur={formik.handleBlur} name="email" required onChange={formik.handleChange} type="text" placeholder="Email" style={{color: "black"}}/>
                                
                            </div>
                            <FieldError>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</FieldError>

                            <div className={classes.imageAndField} style={{marginBottom: 25}}>
                                <img className={classes.fieldsLogo} src={passwordLogo} align="left" alt=""></img>
                                <TextInput name="password" onBlur={formik.handleBlur} value={formik.values.password} required onChange={formik.handleChange} type="password" placeholder="Password" style={{color: "black"}}/>
                                
                            </div>
                        </Form>
                    )}
                </Formik>
                <React.Fragment>
                    <FieldError>{message}</FieldError>
                <StyledButtonWLink disabled={!formik.values.email || !formik.values.password || formik.errors.email || formik.errors.password} onClick={(event) => {logUser()}} to="/login">Log in</StyledButtonWLink> 
                <StyledLabel></StyledLabel>
                </React.Fragment>
                <StyledSubTitle className={classes.accountQuestion} size={15}>Don't have an account?</StyledSubTitle>
                <StyledButton to="/register">Register in</StyledButton>
            </StyledFormArea>
        </StyledContainer>
        </div>
    );
}
export default Login;