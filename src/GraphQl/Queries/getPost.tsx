import { gql } from "@apollo/client";


const POST = gql`
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

export default POST


