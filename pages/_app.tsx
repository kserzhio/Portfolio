import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import '../app/styles/globals.scss';
import { useEffect } from 'react';
import AOS from 'aos';
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
