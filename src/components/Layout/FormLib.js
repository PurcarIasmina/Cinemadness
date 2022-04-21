import { useField } from "formik";
import {
    StyledTextInput,StyledLabel
} from "./../Layout/Style";

export const TextInput=({...props}) =>
{
    const [field,meta]=useField(props);
    return(
        <div>
          <StyledLabel>{props.label}</StyledLabel>
       
        <StyledTextInput {...field} {...props} />
        </div>
    )
}