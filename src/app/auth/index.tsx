'use client'

import { Button, Text, Box, Flex, Divider, AbsoluteCenter, Input, FormControl, FormErrorMessage } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import InputForm from '@/components/Inpute';
import LogoName from '@/components/logoName/LogoName+';
import { Form } from 'react-hook-form';
import { useForm, SubmitHandler } from "react-hook-form"
import { useMutation } from '@apollo/client';
import LOGIN from '@/GraphQl/Mutations/login';

type Inputs = {
  username: string
  password: string
}


interface Props {}

const Login: NextPage<Props> = ({ }) => {
    // const router = useRouter();
  const [value, setvalue]  = useState<Inputs| null>(null);    
  const [create, { data, loading, error }] = useMutation(
      LOGIN,
      {
          variables:{
          username: value?.username,
          password: value?.password
          }, onCompleted(data) {
              console.log('data--------',data);
          }, onError(error) {
               console.log(error.message);
          }
      }
  );

  // function dashboard() {
  //     router.push('/Dashboard');
  // }

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    setvalue(data)
    create()
  };
    return (
        <Flex align={'center'} justify={'center'} w={{ base: "", sm: "", md: "", lg: "" }}>
         <Flex align={'center'} w={"100%"} flexDirection={'column'}>
            <Flex boxShadow={'base'} p={8} align={'center'} mt={10} flexDirection={'column'} w={{ base: '90%', sm: '60%', md: "40%", lg: "30%" }}>
              <LogoName />
              <form  onSubmit={handleSubmit(onSubmit)}>
                  <FormControl mt={4}>
                      <Input id="username" placeholder={"Nom d'utilisateur"}  {...register("username", { required: true })} />
                      <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
                  </FormControl>
                  <FormControl mt={4}>
                    <Input id="password " placeholder={"Mot de passe "}  {...register("password", { required: true })} />
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