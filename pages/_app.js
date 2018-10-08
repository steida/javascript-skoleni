// @flow
import '../node_modules/normalize.css/normalize.css';
import * as React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { bodyBackgroundColor } from '../theme';

export default class MyApp extends App {
  // $FlowFixMe
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <style global jsx>
          {`
            body {
              background-color: ${bodyBackgroundColor};
            }
          `}
        </style>
        <Component {...pageProps} />
      </Container>
    );
  }
}
