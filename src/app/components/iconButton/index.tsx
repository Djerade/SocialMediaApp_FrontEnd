import { IconButton } from "@chakra-ui/react";

interface props {
    border: string;
    background: string;
    howerColor: string; 
    color: string;
    // icon: string;
    shadow: string;
}
const iconButton = ({ border, background, howerColor, color,  shadow}: props) => {

    return (
      <IconButton
       mr={5} boxShadow={'sm'} borderRadius={border} bg={background} _hover={howerColor} color={color}  aria-label={''} />
    );
}

export default iconButton;