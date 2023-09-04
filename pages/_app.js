import '@/styles/globals.scss'
import Head from 'next/head'
import { Provider } from 'react-redux'
import store from '../store/store';
import Layout from '@/components/layout/layout';
import '../components/main-slider/main-slider.scss';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Pizza</title>
        <meta name="description" content="This is pizza shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} /> 
      </Layout> 
    </Provider>
  )
}
