import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($consumables: [ID]) {
    updateUser(consumables: $consumables) {
      name
      dosage
      note
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
  }
`;

export const ADD_CONSUMABLE = gql`
  mutation addConsumable($name: String!, $dosage: String!, $note: String!) {
    addConsumable(name: $name, dosage: $dosage, note: $note) {
      name
      dosage
      note
    }
  }
`;

export const UPDATE_CONSUMABLE = gql`
  mutation updateConsumable($moods: [ID]) {
    updateConsumable(moods: $moods) {
      dosed
      depressants
      lifestyle
      physicalHealth
      mentalHealth
      comment
    }
  }
`;

export const ADD_MOOD = gql`
  mutation addMood($dosed: Boolean, $depressants: Boolean, $lifestyle: Int, $physicalHealth: Int, $mentalHealth: Int, $comment: String) {
    addMood(dosed: $dosed, depressants: $depressants, lifestyle: $lifestyle, physicalHealth: $physicalHealth, mentalHealth: $mentalHealth, comment: $comment) {
      dosed
      depressants
      lifestyle
      physicalHealth
      mentalHealth
      comment
    }
  }
`;