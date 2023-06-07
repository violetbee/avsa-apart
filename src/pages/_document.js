import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='tr'>
      <Head />
      <body>
        <Script id='google-analytics-no-script' strategy='lazyOnLoad'>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-P8QSXXD'
            height='0'
            width='0'
            style='display:none;visibility:hidden'
          ></iframe>
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
