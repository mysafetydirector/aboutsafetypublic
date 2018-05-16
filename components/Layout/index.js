import React from 'react';
import Document from 'next/document';
import Head from 'next/head';
import flush from 'styled-jsx/server';
import ga from 'react-ga';

import normalize from '../../util/style/normalize';
import main from '../../util/style/main';

if (typeof window !== 'undefined') {
  ga.initialize('UA-73165042-3');
}

export default class Layout extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head } = renderPage();
    const styles = flush();
    return { html, head, styles };
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      ga.pageview(window.location.pathname);
    }
  }
  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title || 'About Safety'}</title>
          <link rel="icon" type="image/png" href="/static/img/favicon.png" />
        </Head>
        <style jsx global>
          {normalize}
        </style>
        <style jsx global>
          {main}
        </style>
        {this.props.children}
      </div>
    );
  }
}
