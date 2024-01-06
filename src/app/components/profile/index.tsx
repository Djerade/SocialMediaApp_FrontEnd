import { Avatar, Flex, WrapItem } from "@chakra-ui/react";

const Profile = () => {
    return <Flex>
        <WrapItem borderRadius={'60px'} bgGradient='linear(to-l, #7928CA, #FF0080 )' p={1}>
            <Avatar
                name='mon profile'
                src='https://bit.ly/prosper-baba'
                size={'xl'}
            />
        </WrapItem>
    </Flex>
}
export default Profile;