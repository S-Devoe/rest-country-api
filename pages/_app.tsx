import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../layout/Layout';
import FilterContextProvider from '../context/FilterContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <FilterContextProvider>
        <Component {...pageProps} />
      </FilterContextProvider>
    </Layout>
  );
}

export default MyApp
