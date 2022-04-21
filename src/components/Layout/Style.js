
import styled from 'styled-components';
import backgroundImage from '../../assets/backgroundImage.jpg';
export const colors={
    primary: "#fff",
    theme: "#BE185D",
    light1:"#F3F4F6",
    light2:"#E5E7EB",
    dark1:"#1F2937",
    dark2:"#4B5563",
    dark3:"#9CA3AF",
    red:"#DC2626"
}
export const StyledContainer= styled.div`
margin:0;
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:linear-gradient(0deg, rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${backgroundImage});
background-size:cover;
background-attachment:fixed;`;

export const Avatar= styled.div`
width:40px;
height:40px;
border-radius: 50px;
backgorund-image: url(${props =>props.image});
background-size:cover;
backgorund-position:left;
margin:auto;
`;
export const StyledTextInput = styled.input`
 width:280px;
 padding:15px;
 padding-left:50px;
 font-size: 17px;
 letter-spacing: 1px;
 color: ${colors.light2};
 borderL0;
 display: block;
 margin: 5px auto 10px auto;
 transition: ease-in-out 0.3s;
 ${(props) => props.invalid && `background-color: ${colors.red}; color: ${colors.primary};`}
 &focus:{ background-color: ${colors.dark2}; color: ${colors.primary};}

`;
export const StyledLabel= styled.p`
text-align:left;
font-size:13px;
font-weight:bold;`;
export const StyledFormArea=styled.div`
background-color: grey;
text-align:center;
border-radius:30px;
padding: 45px 55px;
opacity:.6;
border: 1px solid red;
`;
