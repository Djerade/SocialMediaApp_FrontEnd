'use client'

import { Button, Text, Box, Flex, Divider, AbsoluteCenter, Input, FormControl, FormErrorMessage, useColorMode } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LogoName from '@/components/logoName/LogoName+';
import { useForm, SubmitHandler } from "react-hook-form"
import { useMutation } from '@apollo/client';
import LOGIN from '@/GraphQl/Mutations/login';

type Inputs = {
  username: string
  password: string
}


interface Props {}

const Login: NextPage<Props> = ({ }) => {
  const router = useRouter();
  const [value, setvalue]  = useState<Inputs| null>(null);    
  const [create, { data, loading, error }] = useMutation(
      LOGIN,
      {
        variables:{
        username: value?.username,
        password: value?.password
        }, onCompleted(data) {
            router.push('/dashboard');
        }, onError(error) {
             console.log(error.message);
        }
      }
  );
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const { colorMode, toggleColorMode } = useColorMode();
  const onSubmit: SubmitHandler<Inputs> = data => {
    setvalue(data)
    create()
  };
    return (
        <Flex bg={ colorMode == 'dark' ? "black" : "white"}  align={'center'} h={'100vh'} justify={'center'}  w={{ base: "", sm: "", md: "", lg: "" }}>
         <Flex align={'center'} w={"100%"} flexDirection={'column'}>
            <Flex boxShadow={'base'} p={8} align={'center'} mt={10} flexDirection={'column'} w={{ base: '90%', sm: '60%', md: "40%", lg: "30%" }}>
              <LogoName />
              <form  onSubmit={handleSubmit(onSubmit)}>
                  <FormControl mt={4}>
                      <Input id="username" placeholder={"Nom d'utilisateur"}  {...register("username", { required: true })} />
                      <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
                  </FormControl>
                  <FormControl mt={4}>
                    <Input id="password " type='password' placeholder={"Mot de passe "}  {...register("password", { required: true })} />
                    <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
                  </FormControl>
                  <Button  bg={'blue'} mt={4} type={"submit"} w={'100%'} color={'white'} boxShadow={'sm'} >
                      Se connecter
                  </Button>
              </form>
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
    );
}

export default Login