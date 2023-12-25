import { Button, Container, Text, Box, Flex, FormControl, FormLabel, Input, Divider, AbsoluteCenter } from '@chakra-ui/react'
import { NextPage } from 'next'

interface Props {}

const Login: NextPage<Props> = ({}) => {
    return <Flex align={'center'} justify={'center'} w={{ base: "", sm: "", md: "", lg:""}}>
        <Flex  align={'center'} mt={10} flexDirection={'column'} w={{ base: '20%', sm: '20%', md: "20%", lg: "30%" }}>
            <Text variant=''>Instagram</Text>
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
                <AbsoluteCenter>
                    ou
                </AbsoluteCenter>
            </Box>
            <Button
                type='submit'
                mt={4}
            >
                Se connecter
            </Button>
        </Flex>
  </Flex>
}

export default Login