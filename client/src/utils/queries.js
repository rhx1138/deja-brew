import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      review {
        reviewId
        reviewText
        createdAt
        username
        reviewCount
      }
    }
  }
`;