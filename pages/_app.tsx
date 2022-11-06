import NavBar from '../components/NavBar';
import AuthContextProvider from '../contexts/authContext';
import '../styles/globals.css';

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <NavBar />
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
