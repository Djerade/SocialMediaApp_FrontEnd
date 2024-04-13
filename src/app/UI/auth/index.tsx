'use client';
// Modules
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';

import {
  Button,
  Text,
  Box,
  Flex,
  FormControl,
  Input,
  Divider,
  AbsoluteCenter,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
// Imports
import LogoName from '@/app/components/logoName/LogoName+';
import LOGIN from '@/app/GraphQl/Mutations/login';
import Index from '../Dashboard/page';

const infosUserSchema = Yup.object({
  username: Yup.string()
    .required('please your username')
    .min(3, 'Please  3 charaters'),
  password: Yup.string()
    .required('please your password')
    .min(3, 'Please  3 charaters'),
});

function Login() {
  const router = useRouter();
  const [value, setvalue] = useState({
    username: '',
    password: '',
  });

  const [handleLogin, { data, loading, error }] = useMutation(LOGIN, {
    variables: {
      username: value.username,
      password: value.password,
    },
    onCompleted(data, clientOptions) {
      console.log('---', data);
      // router.push('/UI/Dashboard');
    },
  });
  function handl(value: any) {
    setvalue(value);
    handleLogin();
  }
  if (loading) {
    return 'Loading...';
  }
  if (error) {
    console.log('erreur:', error.message);
  }
  if (data) {
    router.push('/UI/Dashboard');
  }

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={infosUserSchema}
      onSubmit={(value) => {
        handl(value);
        // console.log(value);
      }}
    >
      {(props) => (
        <Form>
          <Flex
            align={'center'}
            justify={'center'}
            w={{ base: '', sm: '', md: '', lg: '' }}
          >
            <Flex align={'center'} w={'100%'} flexDirection={'column'}>
              <Flex
                boxShadow={'base'}
                p={8}
                align={'center'}
                mt={10}
                flexDirection={'column'}
                w={{ base: '90%', sm: '60%', md: '40%', lg: '30%' }}
              >
                <LogoName />
                <Field name="username" validate>
                  {({ field, form }: any) => (
                    <FormControl
                      mt={4}
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <Input {...field} placeholder="username" />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="password" validate>
                  {({ field, form }: any) => (
                    <FormControl
                      mt={4}
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <Input
                        type="password"
                        {...field}
                        placeholder="password"
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  bg={'blue'}
                  mt={4}
                  type={'submit'}
                  w={'100%'}
                  color={'white'}
                  boxShadow={'sm'}
                >
                  Se connecter
                </Button>
                <Box position={'relative'} p={10}>
                  <Divider />
                  <AbsoluteCenter bg={'white'} px={4}>
                    ou
                  </AbsoluteCenter>
                </Box>
                <Flex>
                  <Text variant="">Se Connecter avec Facebook</Text>
                </Flex>
              </Flex>
              <Flex
                boxShadow={'base'}
                p={8}
                align={'center'}
                mt={10}
                flexDirection={'row'}
                w={{ base: '90%', sm: '60%', md: '40%', lg: '30%' }}
              >
                <Text variant="">Vous avez pas de compte ? </Text>
                <Text color={'blue'} variant="">
                  Inscrivez vous{' '}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Form>
      )}
    </Formik>
  );
}

export default Login;
