import withApollo from 'next-with-apollo';
//Apollo boost : official package from appollo to work with clients
import ApolloClient from 'apollo-boost';
// endpoint : shows where does the API ends
import { endpoint } from '../config';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
  });
}

export default withApollo(createClient);
