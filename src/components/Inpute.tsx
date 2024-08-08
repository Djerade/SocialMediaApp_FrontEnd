import { FormControl, Input } from "@chakra-ui/react"


const InputForm = (props: {
    placeholderInput: String;
}) => {
    return <FormControl mt={4}>
                <Input placeholder={"Nom d'utilisateur"} />
           </FormControl>
}

export default InputForm;