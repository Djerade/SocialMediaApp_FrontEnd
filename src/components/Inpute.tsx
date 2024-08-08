import { FormControl, Input } from "@chakra-ui/react"
<<<<<<< HEAD
import { useState } from "react";
=======
>>>>>>> main


const InputForm = (props: {
    placeholderInput: String;
<<<<<<< HEAD
    valueContent: String;
    typeContent: String;
    nameContent: String;
    idContent: String;
  
}) => {
   
    const [value, setvalue] = useState<string>();
    const { placeholderInput,  idContent, valueContent, typeContent, nameContent } = props;
    // onchange(value)
    return <FormControl mt={4}>
        <Input  id={idContent.toString()} type={typeContent.toString()} value={valueContent.toString()} name={nameContent.toString()} placeholder={placeholderInput.toString()} />
        </FormControl>
=======
}) => {
    return <FormControl mt={4}>
                <Input placeholder={"Nom d'utilisateur"} />
           </FormControl>
>>>>>>> main
}

export default InputForm;