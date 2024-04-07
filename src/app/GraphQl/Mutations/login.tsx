import { gql } from "@apollo/client";


const LOGIN = gql`
    mutation login (
        $username = String!,
        $password = String!
    ){
    login(username: $username, password: $password) {
        username
        password
        email
        createdAt
        token
    }
}
`;

export default LOGIN





// export const CREATE_TASK = gql`
//   mutation createTask(
//     $title: String!
//     $description: String
//     $priority: String
//     $status: String
//   ){
//     createTask(
//       title: $title
//       description: $description
//       priority: $priority
//       status: $status
      
//     ){
//       title
//       description
//       priority
//       status
//     }
// }
// `