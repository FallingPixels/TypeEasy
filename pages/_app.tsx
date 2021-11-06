import '../styles/globals.css'
import { useAppContext } from './_context'
import type { AppProps } from 'next/app'
import { AppWrapper } from './_context'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp
