import { Avatar, Box, Flex, HStack, Text, WrapItem } from "@chakra-ui/react";
import Profile from "../profile";
import { suggestions } from "@/constants";

const Suggestion = () => {
    return (
        <Box flexDirection={'row'}  w={"full"} as="section" >
            {
                suggestions.map((suggestion:any) =>(
                    <HStack id={suggestion.id} pb={2} justify={'space-between'} align={'center'} spacing={30}>
                        <Flex align={'center'}>
                            <WrapItem borderRadius={'60px'} bgGradient='linear(to-l, #7928CA, #FF0080 )' p={1}>
                                <Avatar
                                    name={suggestion.name}
                                    src={suggestion.photo}
                                     size={{ base: "sm", sm:"sm", md:"sm", lg:"sm" }}
                                />
                            </WrapItem>
                            <Flex ml={1} flexDirection={'column'}>
                                <Text fontSize={"12px"} fontWeight={"semibold"}  variant=''>{suggestion.name} </Text>
                                <Text fontSize={"10px"} textColor={'grey'}  variant=''>Suivie(e) par {suggestion.name} </Text>
                            </Flex>
                        </Flex>
                        <Text fontSize={"small"} fontWeight={"semibold"} textColor={'blue'} variant=''>Suivre</Text>
                    </HStack>
                ))
            }
        </Box>
    );
}

export default Suggestion;