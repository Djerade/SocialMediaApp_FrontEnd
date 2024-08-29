'use client'
import { profile } from "@/constants";
import { Avatar, AvatarGroup, Box, VStack,Text, Flex, HStack, WrapItem } from "@chakra-ui/react";

const Storie = () => {
    return (
          <HStack mb={5}   alignSelf={'center'} spacing={2} width={{ base:"auto",  sm:"auto", md:"auto", lg:"auto"}} >
            {
              profile.map((item: any) =>(
                  <VStack id={item.id} >
                      <WrapItem borderRadius={'30px'} bgGradient='linear(to-l, #7928CA, #FF0080 )' p={1}>
                          <Avatar
                              name={item.name}
                              src = {item.src}
                              size={{ base: "md", sm:"md", md:"md", lg:"md" }}
                          />
                      </WrapItem>
                      <Text fontWeight="semibold" fontSize={12}>
                          {item.name.substring(0, 5)}...
                      </Text>
                  </VStack>
              ))
            }
        </HStack>
    );          
}

export default Storie;