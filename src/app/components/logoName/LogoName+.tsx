import { Box } from "@chakra-ui/react"
import Image from "next/image"
import logoNameImage  from "../../../../public/Images/instagram-name-logo.png";


const LogoName = () => {
    return <Box>
        <Image
          src={logoNameImage}
          width={200}
          height={200}
          alt="logo name"
        />
    </Box>
}
export default LogoName