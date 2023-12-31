import { Button } from "@chakra-ui/react"
import { log } from "console";

const Bouton = (props:{
    bgBtn: string;
    typeBtn: string;
    colorBtn: string;
    Shadow: string;
    textBtn: string;
    largeur: string;
}) => {
    const { bgBtn, Shadow, largeur, typeBtn, colorBtn, textBtn } = props;    
    return <div>
        <Button
            bg={bgBtn}
            mt={4}
            type={"submit"}
            w={largeur}
            color={colorBtn}
            boxShadow={Shadow}
        >
            {textBtn}
        </Button>
    </div>
}

export default Bouton;