import { ApolloClient, InMemoryCache } from "@apollo/client";



export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o5nhsv0r6y01z27oh830w0/master',
  cache: new InMemoryCache()
});