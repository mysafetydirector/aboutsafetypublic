import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <title>About Safety</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/img/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/img/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/img/favicon/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="/static/img/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="theme-color" content="#ffffff" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@MySafetyLeader" />
          <meta name="twitter:title" content="About Safety" />
          <meta name="twitter:description" content="About Safety" />
          <meta
            name="twitter:image"
            content="https://aboutsafetytraining.com/static/img/banner_1024x512.png"
          />
          <meta property="og:url" content="https://aboutsafetytraining.com/" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="About Safety" />
          <meta property="og:description" content="About Safety" />
          <meta
            property="og:image"
            content="https://aboutsafetytraining.com/static/img/banner_1024x512.png"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto|Vollkorn"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
