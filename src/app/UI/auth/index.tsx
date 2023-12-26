import LogoName from '@/app/components/logoName/logoName'
import { Button, Text, Box, Flex, FormControl, Input, Divider, AbsoluteCenter } from '@chakra-ui/react'
import { NextPage } from 'next'


interface Props {}

const Login: NextPage<Props> = ({}) => {
    return <Flex align={'center'} justify={'center'} w={{ base: "", sm: "", md: "", lg: "" }}>
        <Flex align={'center'} w={"100%"} flexDirection={'column'}>
            <Flex boxShadow={'base'} p={8} align={'center'} mt={10} flexDirection={'column'} w={{ base: '90%', sm: '60%', md: "40%", lg: "30%" }}>
                <LogoName/>
                <FormControl mt={4}>
                    <Input placeholder={"Nom d'utilisateur"} />
                </FormControl>
                <FormControl mt={4}>
                    <Input placeholder={"Mot de passe"} />
                </FormControl>
                <Box
                    position={'relative'}
                    p={10}
                >
                    <Divider/>
                    <AbsoluteCenter bg={'white'} px={4}>
                        ou
                    </AbsoluteCenter>
                </Box>
                <Button
                    type='submit'
                    mt={4}
                    w={'100%'}
                    color={'white'}
                    bg={'blue'}
                >
                    Se connecter
                </Button>
            </Flex>
            <Flex boxShadow={'base'} p={8} align={'center'} mt={10} flexDirection={'row'} w={{ base: '90%', sm: '60%', md: "40%", lg: "30%" }}>
                <Text variant=''>Vous avez pas de compte ? </Text>
                <Text color={'blue'} variant=''>Inscrivez vous </Text>
            </Flex>
        </Flex>
  </Flex>
}

export default Login