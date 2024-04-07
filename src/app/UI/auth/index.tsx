'use client'
import Bouton from '@/app/components/Bouton'
import { useRouter } from 'next/navigation';
import InputForm from '@/app/components/Inpute'
import LogoName from '@/app/components/logoName/LogoName+'
import { Button, Text, Box, Flex, FormControl, Input, Divider, AbsoluteCenter } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useMutation } from '@apollo/client';
import { error } from 'console';
import { gql } from "@apollo/client";
import { useState } from 'react';
// import LOGIN from '@/app/GraphQl/Mutations/login';


interface Props {}

const Login: NextPage<Props> = ({ }) => {
    const router = useRouter();
    const [value, setvalue] = useState({
        username: "",
        password: "",
    });

//   const handleChange = (event: any) => {
//     setvalue({
//       ...value,
//       [event.target.name]: event.target.value
//     })
//   }

    const handleChange = (event: any) => {
        console.log('salut');
        
    }
    // const [create, { data, loading, error }] = useMutation(
      
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
    


    function dashboard() {
        router.push('/Dashboard');
    }
    
    return <Flex align={'center'} justify={'center'} w={{ base: "", sm: "", md: "", lg: "" }}>
        <Flex align={'center'} w={"100%"} flexDirection={'column'}>
            <Flex boxShadow={'base'} p={8} align={'center'} mt={10} flexDirection={'column'} w={{ base: '90%', sm: '60%', md: "40%", lg: "30%" }}>
                <LogoName />
                <InputForm   placeholderInput={"Nom d'utilisateur"} handleChange={ (): void {
                    throw new Error('Function not implemented.');
                } }/>
                <InputForm  placeholderInput={"Mot de passe"} handleChange={function (): void {
                    throw new Error('Function not implemented.');
                } }/>
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