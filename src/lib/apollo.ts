import { ApolloClient, InMemoryCache } from "@apollo/client";

const apiURL = import.meta.env.VITE_API_URL;
const apiAccessToken = import.meta.env.VITE_API_ACCESS_TOKEN;

export const client = new ApolloClient({
  uri: apiURL,
  headers: {
    'Authorization': `Bearer ${apiAccessToken}`
  },
  cache: new InMemoryCache()
});
