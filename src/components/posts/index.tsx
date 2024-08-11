
import { Avatar, Center, Flex, HStack, IconButton,  useColorMode, WrapItem,  Text, Spacer } from "@chakra-ui/react";
import { GrMore } from "react-icons/gr";
import { IoIosAdd } from "react-icons/io";
import Profile from "../profile";



const Posts = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return  <Flex  p={5} w={{ base:"100%", sm:"100%", lg:"50%"}} >
        <Flex justifyContent={'space-between'} width={ '100%'} align={'center'}>
            <Flex alignItems={'center'}>
                <Profile/>
                 <Spacer />
                <Flex alignContent={'center'}  flexDirection={'column'} align={'start'}>
                    <Text fontWeight={"semibold"} fontSize={{ base:"xs",md:"sm", lg:"md"}}>
                        Most.barber. 2j
                    </Text>
                    <Text fontSize={{ base:"xs",md:"sm", lg:"md"}}>
                        Audio d'origine
                    </Text>
                </Flex>
            </Flex>
            <IconButton color={ colorMode == "light" ? "black": "white"} bg={ colorMode  == "light" ? "white": "black"} icon={<GrMore/>}  aria-label={""} />
        </Flex>
       
    </Flex>
}

export default Posts;