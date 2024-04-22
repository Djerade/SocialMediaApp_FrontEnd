'use client';
// Modules
import { useMutation } from '@apollo/client';
import { useContext, useState } from 'react';
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
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// Imports

import Loading from '../../components/Splash';
import LOGIN from '@/GraphQl/Mutations/login';
import LogoName from '@/components/logoName/LogoName+';
import LogoFacebook from '@/components/logoName/logoFb';

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

  const storageSession = (data: any) => {
    data = JSON.stringify(data);
    sessionStorage.setItem('user', data);
    // console.log(String(data));
  };
  const [handleLogin, { loading }] = useMutation(LOGIN, {
    // context: {
    //   Headers: {
    //     'x-api-key': 'fd',
    //   },
    // },
    variables: {
      username: value?.username?.trim(),
      password: value?.password?.trim(),
    },
    onCompleted(data) {
      storageSession(data?.login);
      router.push('/pages/Dashboard');
    },
    onError(error) {
      console.log('error', error);
    },
  });
  function Submit(value: any) {
    setvalue(value);
    handleLogin();
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={infosUserSchema}
      onSubmit={(value) => {
        Submit(value);
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
                      mt={8}
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
                  bg={'blue.500'}
                  mt={4}
                  type={'submit'}
                  w={'100%'}
                  borderRadius={'10px'}
                  color={'white'}
                  boxShadow={'sm'}
                >
                  Se connecter
                </Button>
                <Box position={'relative'} p={4}>
                  <Divider />
                  <AbsoluteCenter bg={'white'} px={10}>
                    ou
                  </AbsoluteCenter>
                </Box>
                <Flex alignItems={'center'} flexDirection={'row'}>
                  <LogoFacebook />
                  <Text ml={3} variant="">
                    Se Connecter avec Facebook
                  </Text>
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
                <Link href="/UI/auth/signUp">
                  <Text color={'blue'} variant="">
                    Inscrivez vous
                  </Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Form>
      )}
    </Formik>
  );
}

export default Login;
