import isPropValid from "@emotion/is-prop-valid";
import { AppProps } from "next/app";
import Head from "next/head";
import { StyleSheetManager, ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/global";
import theme from "../styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Next.js Boilerplate</title>
          <link
            rel="shortcut icon"
            href="/img/icon-192.png"
            type="image/x-icon"
          />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@200;400&family=EB+Garamond&display=swap" rel="stylesheet"/>
          <meta name="theme-color" content="#06092B" />
          <meta name="description" content="A simple boilerplate for next.js" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default App;
