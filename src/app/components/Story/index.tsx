import { profile } from "@/app/constants";
import { Avatar, Center, Flex, HStack, IconButton, WrapItem } from "@chakra-ui/react";
import { IoIosAdd } from "react-icons/io";


const Story = () => {
    return <>
        <HStack p={7} spacing={5}>
            {
                profile.map((imageLink) => (
                    <Flex>
                        <WrapItem borderRadius={'60px'} bgGradient='linear(to-l, #7928CA, #FF0080 )' p={1}>
                            <Avatar
                                name='mon profile'
                                src='https://bit.ly/prosper-baba'
                                size={'md'}
                            />
                        </WrapItem>
                    </Flex>
                ))
            }
        </HStack>
    </>
}

export default Story;