import { profile } from "@/constants";
import { Avatar, AvatarGroup, Box, Flex, HStack, WrapItem } from "@chakra-ui/react";

const Storie = () => {
    return (
        <HStack m={5} align={'center'} spacing={2} width={{ base:"100%",  sm:"100%", md:"60%", lg:"60%"}} >
          {
            profile.map((item: any) =>(
                <WrapItem borderRadius={'30px'} bgGradient='linear(to-l, #7928CA, #FF0080 )' p={1}>
                    <Avatar
                        name={item.name}
                        src = {item.src}
                        size={{ base: "md", sm:"md", md:"md", lg:"md" }}
                    />
                </WrapItem>
            ))
          }
        </HStack>
    );
}

export default Storie;