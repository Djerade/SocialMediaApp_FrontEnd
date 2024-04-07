import { FormControl, Input } from "@chakra-ui/react"


const InputForm = (props: {
    placeholderInput: String;
    handleChange(): void;

}) => {
   
    const { placeholderInput, handleChange } = props;
    return <FormControl mt={4}>
                <Input id="username" name="username" onClick={handleChange} placeholder={placeholderInput.toString()} />
           </FormControl>
}

export default InputForm;