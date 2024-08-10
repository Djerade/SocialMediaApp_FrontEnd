import { gql } from "@apollo/client";


const GET_POST = gql`
    query GetPosts {
        getPosts {
            id
            body
            createdAt
            user {
                username
                email
            }
        }
    }
`;

export default GET_POST;


