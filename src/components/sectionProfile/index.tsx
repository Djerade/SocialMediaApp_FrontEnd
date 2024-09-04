//Moduls
import { Avatar, Flex, Text, WrapItem } from "@chakra-ui/react";

//Imports
import Profile from "../profile";

const SectionProfile = () => {
    return <>
    <Flex  justify={'space-between'} align={'center'} w={"full"}>
        <Flex mb={5}  justify={'center'} flexDirection={'row'} w={"max-content"}>
            <WrapItem borderRadius={'60px'} bgGradient='linear(to-l, #7928CA, #FF0080 )' p={1}>
                <Avatar
                    name='mon profile'
                    src='https://bit.ly/prosper-baba'
                     size={{ base: "md", sm:"md", md:"md", lg:"md" }}
                />
            </WrapItem>
            <Flex  ml={1}  align={'start'} justify={"center"} flexDirection ={"column"}>
              <Text fontSize={"12px"} fontWeight={"semibold"}  variant=''>djeradegolbeparfait </Text>
              <Text fontSize={"10px"} textColor={'grey'}  variant=''>Djeradé Golbé Parfait</Text>
            </Flex>
         </Flex>
         <Text textAlign={'center'} fontSize={"small"} fontWeight={"semibold"} textColor={'blue'} variant=''>Basculer</Text>
    </Flex>
    </>
}

export  default SectionProfile;