import { ApolloClient, InMemoryCache } from "@apollo/client";

const apiURL = import.meta.env.VITE_API_URL;

export const client = new ApolloClient({
  uri: apiURL,
  cache: new InMemoryCache()
});