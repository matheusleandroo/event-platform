import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pqrn7q2e1901xlblj2btx5/master',
  cache: new InMemoryCache()
});