import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}