import { Box, HStack, Text } from "@chakra-ui/react";
import Profile from "../profile";

const Suggestion = () => {
    return (
        <Box display={{ base: "none", sm:"none", md:"block"}} w={"full"} as="section" >
            <HStack  justify={'space-between'}  spacing={30}>
                <Profile/>
                <Text fontSize={"small"} fontWeight={"semibold"} textColor={'blue'} variant=''>Suivre</Text>
            </HStack>
        </Box>
    );
}

export default Suggestion;