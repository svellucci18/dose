// From homework -- UPDATE

import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
`;











