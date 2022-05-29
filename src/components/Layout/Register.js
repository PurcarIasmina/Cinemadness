import React from "react";
import classes from './Register.module.css';
import {StyledContainer,StyledTextInput,Avatar,StyledFormArea,StyledTitle,StyledSubTitle,StyledButton, FieldError, StyledButtonWLink,FormError} from './Style';
import logo from '../../assets/logo.png';
import emailLogo from '../../assets/email.png';
import passwordLogo from '../../assets/password.png';
import nameLogo from '../../assets/name.png';
import { Formik ,Form,useFormik, Field} from "formik";
import { TextInput} from "./FormLib";
import {useState} from "react";
import axios   from "axios";
import * as yup from "yup";
import {useNavigate} from 'react-router-dom';
function Register()
{
  
   
    // const displayInfo=()=> {
    
    //     console.log(fname+lname+email+password);
    // };
    const [success, setSuccess] = useState(null);
    const [error,setError]=useState(null);
    const navigator=useNavigate();
    const addUser=()=>{
        //console.log(fname);
    axios.post("http://localhost:3007/create",{fname:formik.values.fname,lname:formik.values.lname,email:formik.values.email,password:btoa(formik.values.password), cpassword:btoa(formik.values.cpassword)},{

        headers: {

            'Content-Type' : 'application/json'

        }

    }).then(({result})=>{
        console.log(result);
        navigator("/login")}).catch(err=>{
            console.log()
        if(err.response.status===300)
        {
            setError("Email already used!");
            setSuccess(null);
        }
    });
    };
    const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const validationSchema = yup.object({
        fname: yup
          .string()
          .min(3, "Please enter you real name")
          .required("First name is required!"),
          lname: yup
          .string()
          .min(3, "Please enter you real name")
          .required("Last name is required!"),
        email: yup.string().email("Please enter a valid email address").required("Email is required!"),
        password: yup
          .string()
          .matches(PASSWORD_REGEX, "Please enter a strong password")
          .required("Password is required!"),
        cpassword: yup
          .string()
          .required("Please confirm your password")
          .when("password", {
            is: (val) => (val && val.length > 0 ? true : false),
            then: yup
              .string()
              .oneOf([yup.ref("password")], "Password does not match"),
          }),
      });
    const formik= useFormik(
    {   initialValues:
        {
        fname:'',
        lname:'',
        email:'',
        password:'',
        cpassword:''

        },  
        validationSchema:validationSchema,
        onSubmit: values =>
        {
            console.log(values);
        },
        validateOnBlur: true,

    }
    );
    
    return(
        <div>
          <StyledContainer>
                <StyledFormArea>
                    <div>
                        <img className={classes.logo} src={logo} align="left" alt=""></img>
                        <StyledTitle size={30} color={"red"}>Register in </StyledTitle>
                    </div>
                    {!success && <FormError>{error ? error : ""}</FormError>}
                    <Formik>
                        {() =>
                        (
                            <Form style={{marginTop: 30}} onSubmit={formik.handleSubmit}>
                              <FieldError>{formik.touched.fname && formik.errors.fname ? formik.errors.fname : ""}</FieldError>

                                <div className={classes.imageAndField}>
                                    <img className={classes.fieldsLogo} src={nameLogo} align="left" alt=""></img>
                                    <TextInput value={formik.values.fname} onBlur={formik.handleBlur} name="fname" onChange={formik.handleChange} type="text" placeholder="First Name" style={{color: "black"}}/>
                                </div>
                                <FieldError>{formik.touched.lname && formik.errors.lname ? formik.errors.lname : ""}</FieldError>
                                <div className={classes.imageAndField}>
                                    <img className={classes.fieldsLogo} src={nameLogo} align="left" alt=""></img>
                                    <TextInput  value={formik.values.lname} onBlur={formik.handleBlur} name="lname" onChange={formik.handleChange} type="text" placeholder="Last Name" style={{color: "black"}}/>
                                </div>
                                <FieldError>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</FieldError>

                                <div className={classes.imageAndField}>
                                    <img className={classes.fieldsLogo} src={emailLogo} align="left" alt=""></img>
                                    <TextInput name="email"  onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} type="text" placeholder="Email" style={{color: "black"}}/>
                                </div>
                                <FieldError>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</FieldError>

                                <div className={classes.imageAndField}>
                                    <img className={classes.fieldsLogo} src={passwordLogo} align="left" alt=""></img>
                                    <TextInput name="password"  onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} type="password" placeholder="Password" style={{color: "black"}}/>
                                </div>
                                <FieldError>{formik.touched.cpassword && formik.errors.cpassword ? formik.errors.cpassword : ""}</FieldError>

                                <div className={classes.imageAndField} style={{marginBottom: 25}}>
                                    <img className={classes.fieldsLogo} src={passwordLogo} align="left" alt=""></img>
                                    <TextInput name="cpassword" onBlur={formik.handleBlur} value={formik.values.cpassword} onChange={formik.handleChange} type="password" placeholder="Confirm Password" style={{color: "black"}}/>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <StyledButtonWLink disabled={!formik.values.fname || !formik.values.lname || !formik.values.email || !formik.values.password || !formik.values.cpassword }onClick={(event) => {addUser()}} to="/register">Create</StyledButtonWLink>
                    <StyledSubTitle className={classes.accountQuestion} size={15}>Already have an account?</StyledSubTitle>
                    <StyledButton to="/login">Log in</StyledButton>
                </StyledFormArea>
            </StyledContainer>
        </div>
    );
}
export default Register;