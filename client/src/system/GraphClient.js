import ApolloClient from 'apollo-boost';

// apollo client setup
export const gClient = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});