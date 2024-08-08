'use client'

import { Button, Text, Box, Flex, Divider, AbsoluteCenter } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useState } from 'react';
import { useRouter } from 'next/router';
import InputForm from '@/components/Inpute';
import LogoName from '@/components/logoName/LogoName+';



interface Props {}

const Login: NextPage<Props> = ({ }) => {
    // const router = useRouter();
    const [value, setvalue] = useState({
        username: "",
        password: "",
    });

    // const [create, { data, loading, error }] = useMutation(
    //     LOGIN,
    //     {
    //         variables:{
    //         username: value.username,
    //         password: value.password
    //         }, onCompleted(data) {
    //             console.log('data--------',data);
    //         }, onError(error) {
    //              console.log(error.message);
    //         }
    //     }
    // );





    // const handleSubmit = () => {
    //     create()
    // }
    


    // function dashboard() {
    //     router.push('/Dashboard');
    // }
    
    return <Flex align={'center'} justify={'center'} w={{ base: "", sm: "", md: "", lg: "" }}>
        <Flex align={'center'} w={"100%"} flexDirection={'column'}>
            <Flex boxShadow={'base'} p={8} align={'center'} mt={10} flexDirection={'column'} w={{ base: '90%', sm: '60%', md: "40%", lg: "30%" }}>
                <LogoName />
            
                <Button  bg={'blue'} mt={4} type={"submit"} w={'100%'} color={'white'} boxShadow={'sm'} >
                    Se connecter
                </Button>
                <Box position={'relative'} p={10}>
                    <Divider/>
                    <AbsoluteCenter bg={'white'} px={4}>
                        ou
                    </AbsoluteCenter>
                </Box>
                <Flex>
                    <Text variant=''>Se Connecter avec Facebook</Text>
                </Flex>
            </Flex>
            <Flex boxShadow={'base'} p={8} align={'center'} mt={10} flexDirection={'row'} w={{ base: '90%', sm: '60%', md: "40%", lg: "30%" }}>
                <Text variant=''>Vous avez pas de compte ? </Text>     
                <Text color={'blue'} variant=''>Inscrivez vous </Text>
            </Flex>
        </Flex>
  </Flex>
}

export default Login