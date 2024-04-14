'use client';
import { gql } from '@apollo/client';

const SIGNUP = gql`
  mutation CreateAccount(
    $username: String
    $password: String
    $email: String
    $confirmation: String
  ) {
    createAccount(
      username: $username
      email: $email
      password: $password
      confirmationPassword: $confirmation
    ) {
      username
      password
      email
      createdAt
      token
    }
  }
`;

export default SIGNUP;
