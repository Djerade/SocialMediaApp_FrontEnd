'use client';
import SIGNUP from '@/app/GraphQl/Mutations/signUp';
import LogoName from '@/app/components/logoName/LogoName+';
import LogoFacebook from '@/app/components/logoName/logoFb';
import { useMutation } from '@apollo/client';
import {
  Flex,
  FormControl,
  Input,
  FormErrorMessage,
  Button,
  Text,
  Divider,
  Box,
  AbsoluteCenter,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { Formik, Form, Field } from 'formik';
import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

interface Props {}

const SignUp: NextPage<Props> = ({}) => {
  const router = useRouter();
  const [value, setvalue] = useState({
    username: '',
    email: '',
    confirmation: '',
    password: '',
  });
  const [handleSignUp, { data, loading, error }] = useMutation(SIGNUP, {
    variables: {
      username: value?.username.trim(),
      email: value?.email.trim(),
      password: value?.password.trim(),
      confirmation: value?.confirmation.trim(),
    },
    onCompleted(data) {
      console.log(data);
      router.push('/UI/Dashboard');
    },
    onError(error) {
      console.log(error);
    },
  });
  if (loading) {
    return 'Loading...';
  }
  const Submit = (value: any) => {
    setvalue(value);
    handleSignUp();
  };
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        confirmation: '',
        password: '',
      }}
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
                mt={5}
                flexDirection={'column'}
                w={{ base: '90%', sm: '60%', md: '40%', lg: '30%' }}
              >
                <LogoName />
                <Text margin={5} variant="">
                  Inscrivez-vous pour voir les photos et vidéos de vos amis
                </Text>
                <Button
                  bg={'blue.500'}
                  mt={4}
                  type={'submit'}
                  w={'100%'}
                  borderRadius={'10px'}
                  color={'white'}
                  boxShadow={'sm'}
                >
                  Se connecter avec Facebook
                </Button>
                <Box position={'relative'} p={4}>
                  <Divider />
                  <AbsoluteCenter bg={'white'} px={10}>
                    ou
                  </AbsoluteCenter>
                </Box>
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
                <Field name="email" validate>
                  {({ field, form }: any) => (
                    <FormControl
                      mt={8}
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <Input {...field} placeholder="email" />
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
                <Field name="confirmation" validate>
                  {({ field, form }: any) => (
                    <FormControl
                      mt={4}
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <Input
                        type="password"
                        {...field}
                        placeholder="confirmation"
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
                  S'inscrire
                </Button>
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
};

export default SignUp;
