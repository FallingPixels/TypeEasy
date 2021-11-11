import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';
import { AppContext, GlobalContext } from './_context';
function MyApp({ Component, pageProps }: AppProps) {
  return (
      <AppContext.Provider value={ GlobalContext }>
      <Component {...pageProps} />
      </AppContext.Provider>
  );
}

export default MyApp;
