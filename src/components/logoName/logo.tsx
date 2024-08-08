<<<<<<< HEAD
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import logoImage from '../../../public/Images/InstagramLogo.jpeg';

const LogoImage = () => {
  return (
    <Box>
      <Image src={logoImage} width={50} height={50} alt="logo name" />
    </Box>
  );
};
export default LogoImage;
=======
import { Box } from "@chakra-ui/react"
import Image from "next/image"
import logoImage  from "../../../../public/Images/InstagramLogo.jpeg";

const LogoImage = () => {
    return <Box>
        <Image
          src={logoImage}
          width={50}
          height={50}
          alt="logo name"
        />
    </Box>
}
export default LogoImage;
>>>>>>> main
