import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      consumables {
        _id
        name
      }
    }
  }
`;

export const QUERY_CONSUMABLES = gql`
  query getConsumables {
    consumables {
      _id
      name
    }
  }
`;

export const QUERY_MOODS = gql`
  query getMoods {
    moods {
      _id
      dosed
      depressants
      lifestyle
      physicalHealth
      mentalHealth
      comment
    }
  }
`;