'use client';
import { gql } from '@apollo/client';

const LOGIN = gql`
  mutation Login($username: String, $password: String) {
    login(username: $username, password: $password) {
      username
      password
      email
      createdAt
      token
    }
  }
`;

export default LOGIN;
