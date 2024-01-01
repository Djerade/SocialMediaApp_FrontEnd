import { Flex } from "@chakra-ui/react"
import LogoImage from "../logoName/logo"
import LogoName from "../logoName/logoName"

const Sidebar = () => {
    return <Flex
        w='250px'
        h='100vh'
        display={{ base:"none", sm:"block" }}
        p={2}
        bg='white.100'
        boxShadow={"lg"}>
       <Flex flexDirection={'row'} align={'center'} width={"100%"} h={'50px'} justify={'center'} >
          <LogoImage />
          <Flex ml={2} align={'center'} h={'50px'} w={"90px"}>
            <LogoName />
          </Flex>
        </Flex>
        </Flex>
}
export default Sidebar