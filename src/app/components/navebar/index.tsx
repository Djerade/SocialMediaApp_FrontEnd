import { Flex, Input, Button, IconButton } from "@chakra-ui/react";
import { GrSend } from "react-icons/gr";
import { AiOutlineCamera } from "react-icons/ai";
import { IoAddSharp, IoMenuSharp } from "react-icons/io5";
import { RiNotification4Line } from "react-icons/ri";

//Import
import LogoName from "../logoName/logoName";

const NaveBar = () => {
    return <Flex justify={'space-between'} align={'center'} p={3} boxShadow={'lg'}  h={'70px'} w={"100%"}>
        <Flex align={'center'} display={{ base:"none", sm:"block"}} justify={'space-between'} w={"55%"}>
          <Input alignSelf={'center'} mr={2} w={'50%'} placeholder='Search' borderRadius={15} />
          <Button  leftIcon={<IoAddSharp/>} color={'white'} borderRadius={'30px'} bgGradient='linear(to-l, #7928CA, #FF0080)'  >
            Create new post
          </Button>
        </Flex>
        <Flex  display={{ base:"none", sm:"block"}} justify={'end'}  align={'end'} width={'25%'}>
          <IconButton mr={5} boxShadow={'sm'} borderRadius={'30px'} bg={'white'} _hover={{ bg: "gray" }} color={'gray'} icon={<GrSend />} aria-label={''} />
          <IconButton mr={5} boxShadow={'sm'} borderRadius={'30px'} bg={'white'} _hover={{ bg: "gray" }} color={'gray'} icon={<RiNotification4Line/>} aria-label={''} />
          <IconButton mr={5} boxShadow={'sm'}  borderRadius={'30px'}  bg={'white'}  _hover={{ bg: "gray" }} color={'gray'} icon={<IoMenuSharp />} aria-label={''} />
        </Flex>
      <Flex display={{ base: 'block', sm:"none"}} w={"100%"} justify={"space-between"}>
         <IconButton mr={5} boxShadow={'sm'} borderRadius={'30px'} bg={'white'} _hover={{ bg: "gray" }} color={'gray'} icon={<AiOutlineCamera />} aria-label={''} />
         <Flex ml={2} align={'center'} h={'50px'} w={"90px"}>
            <LogoName />
         </Flex>
         <IconButton mr={5} boxShadow={'sm'} borderRadius={'30px'} bg={'white'} _hover={{ bg: "gray" }} color={'gray'} icon={<GrSend />} aria-label={''} />
      </Flex>
      </Flex>
}
export default NaveBar;