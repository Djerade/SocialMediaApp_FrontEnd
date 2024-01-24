import { Avatar, Center, Flex, HStack, IconButton, WrapItem } from "@chakra-ui/react";
import { IoIosAdd } from "react-icons/io";

const profile = [
    {
        link_profile: 'https://bit.ly/prosper-baba'
    },
    {
        link_profile: 'https://bit.ly/prosper-baba'
    },
    {
        link_profile: 'https://bit.ly/prosper-baba'
    },
    {
        link_profile: 'https://bit.ly/prosper-baba'
    },
    {
        link_profile: 'https://bit.ly/prosper-baba'
    }
];

const Story = () => {
    return <>
        <HStack p={7} spacing={5}>
            <Flex>
                <WrapItem borderRadius={'60px'} bgGradient='linear(to-l, #7928CA, #FF0080 )' p={1}>
                    <WrapItem borderRadius={'60px'} h={'60px'} w={'60px'} bg={'white'} p={1}>
                        <Center h={'100%'} w={'100%'}>
                            <IconButton bg={'white'} size={'lg'} aria-label='' icon={<IoIosAdd/>}/>
                        </Center>
                    </WrapItem>
                </WrapItem>
            </Flex>
            {
                profile.map((imageLink) => (
                    <Flex>
                        <WrapItem borderRadius={'60px'} bgGradient='linear(to-l, #7928CA, #FF0080 )' p={1}>
                            <Avatar
                                name='mon profile'
                                src='https://bit.ly/prosper-baba'
                                size={'lg'}
                            />
                        </WrapItem>
                    </Flex>
                ))
            }
        </HStack>
    </>
}

export default Story;