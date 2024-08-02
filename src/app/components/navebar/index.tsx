import { Flex, Input, Button, IconButton, HStack } from "@chakra-ui/react";
import { GrSend } from "react-icons/gr";
import { AiOutlineCamera } from "react-icons/ai";
import { IoAddSharp, IoMenuSharp } from "react-icons/io5";
import { RiNotification4Line } from "react-icons/ri";

//Import
import LogoName from "../logoName/LogoName+";

const NaveBar = () => {
    return <Flex justify={{ base: "space-between", sm:'space-between'}} align={'center'} p={3} boxShadow={'lg'}  h={'70px'} w={"100%"}>
        <Flex align={'center'} display={{ base:"none", sm:"block"}} justify={'space-between'} w={"55%"}>
          <Input alignSelf={'center'} mr={2} w={'50%'} placeholder='Search' borderRadius={15} />
          {/* <Button  leftIcon={<IoAddSharp/>} color={'white'} borderRadius={'30px'} bgGradient='linear(to-l, #7928CA, #FF0080)'  >
            Create new post
          </Button> */}
        </Flex>
        <Flex display={{ base:"none", sm:"none", md:"block"}}   width='fit-content'>
          <IconButton mr={5} boxShadow={'sm'} borderRadius={'30px'} bg={'white'} _hover={{ bg: "gray" }} color={'white.100'} icon={<GrSend />} aria-label={''} />
          <IconButton mr={5} boxShadow={'sm'} borderRadius={'30px'} bg={'white'} _hover={{ bg: "gray" }} color={'white.100'} icon={<RiNotification4Line/>} aria-label={''} />
          <IconButton mr={5} boxShadow={'sm'}  borderRadius={'30px'}  bg={'white'}  _hover={{ bg: "gray" }} color={'white.100'} icon={<IoMenuSharp />} aria-label={''} />
        </Flex>
       {/* Modbile */}
            <IconButton display={{ base:"block", sm:"none", md:"none"}} mr={5} boxShadow={'sm'} borderRadius={'30px'} bg={'white'} _hover={{ bg: "white.100" }} color={'gray'} icon={<AiOutlineCamera />} aria-label={''} /> 
            <Flex display={{ base:"block", sm:"none", md:"none"}} ><LogoName  /></Flex>
            <IconButton display={{ base:"block", sm:"none", md:"none"}} mr={5} boxShadow={'sm'} borderRadius={'30px'} bg={'white'} _hover={{ bg: "white.100" }} color={'gray'} icon={<GrSend />} aria-label={''} />
      </Flex>
}
export default NaveBar;