import { profile } from "@/app/constants";
import { Avatar, Center, Flex, HStack, IconButton, WrapItem, Text, Box } from "@chakra-ui/react";
import { IoIosAdd } from "react-icons/io";


const Story = () => {
    return <>
        <Flex flexDirection={'column'} m={'2'}>
            <Flex align={'center'} p={3}  width={'100%'} justify={"space-between"} flexDirection={'row'}>
                <Text textColor={'black'} fontWeight={'bold'}>
                    Stories
                </Text>
                <Flex align={'center'}  mr={6}>
                    <IconButton bg={'white'} icon={<IoIosAdd/>}  aria-label={""}/>
                    <Text textColor={'black'} fontWeight={'bold'}>
                        Watch all
                    </Text>
                </Flex>
            </Flex>
            <Box
            overflow={'auto'}
            width={'100%'}
            css={{
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
                '-ms-overflow-style': 'none',
                'scrollbar-width': 'none',
            }}
            >
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
            </Box>
        </Flex>
    </>
}

export default Story;