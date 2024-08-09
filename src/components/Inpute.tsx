'use client'
import { FormControl, Input } from "@chakra-ui/react"


const InputForm = (props: any) => {
    const { placeholder, type, name }= props;    
    return (<FormControl mt={4}>
             <Input 
              id={name}
              name={name} 
              type={type}
              placeholder={placeholder}
              />
           </FormControl>);
}

export default InputForm;