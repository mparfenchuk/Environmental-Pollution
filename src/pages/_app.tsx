import App from 'next/app';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'styled-components';

import Seo from '../utils/defaultSeo';
import EarthLayout from '../layouts/EarthLayout';
import { LayoutProps } from '../types';
import GlobalStyle, { theme } from '../theme';

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class MyApp extends App<LayoutProps> {
  render () {
    const { Component, pageProps } = this.props
    const Layout = Component.Layout || EarthLayout;

    return (
      <>
        <DefaultSeo {...Seo}/>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* font */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Space+Mono&display=swap" />
          
          {/* css for libs */}
          <link rel="stylesheet" type="text/css" href="/css/nprogress.css" />
          <link rel="stylesheet" type="text/css" href="/css/leaflet.css" />

          {/* favicon */}
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
        </Head>
        <Layout>
          <ThemeProvider theme={theme}>
            <>
              <Component {...pageProps} />
              <GlobalStyle />
            </>
          </ThemeProvider>
        </Layout>
      </>
    )
  }
};