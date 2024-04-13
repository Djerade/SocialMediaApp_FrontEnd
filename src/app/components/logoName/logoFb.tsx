import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import logoImage from '../../../../public/Images/facebook.png';

const LogoFacebook = () => {
  return (
    <Box>
      <Image src={logoImage} width={20} height={20} alt="logo name" />
    </Box>
  );
};
export default LogoFacebook;
