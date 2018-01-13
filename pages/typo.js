import Head from 'next/head'
import Link from 'next/link'
import App from '../src/components/app'

import get from 'lodash/get'
import { getProjectInitialStateByKey, TYPO_KEY } from '../src/utils/project'

const Page = ({ url }) => (
  <div className='generic-text'>
    <Head>
      <meta charset="UTF-8" />
      <meta name="google-site-verification" content="ttfHHfD2dU8BUV7DXBlA_ywxnQV_HCocu40xBGLmtVI" />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name="robots" content="index,follow" />

      <link rel="icon" href="https://www.matserra.design/static/about/logo-part1.svg" />
      <link rel="canonical" href="https://www.matserra.design/typo/" />
      <title>Mathilde SERRA - Typography posters | Illustration | Typo | Inspiration</title>

      <meta itemprop="name" content="Mathilde SERRA - Typography posters | Illustration | Typo | Inspiration" />
      <meta itemprop="description" content="To increase an edtech startup notoriety, I created ten typographical works based on famous quotes. They were used in facebook posts, upon bags distributed during shows, and posters offered to teachers for their classrooms." />
      <meta itemprop="image" content="https://www.matserra.design/static/seo/homepage.png" />

      <meta name="description" content="To increase an edtech startup notoriety, I created ten typographical works based on famous quotes. They were used in facebook posts, upon bags distributed during shows, and posters offered to teachers for their classrooms." />
      <meta name="keywords" content="designer, artistic director, directeur artistique, start-up, web, mobile, tablet, tablette, apps, applications, com, marketing, illustration, design" />
      <meta name="author" content="Mathilde SERRA" />

      <meta property="og:title" content="Mathilde SERRA - Typography posters | Illustration | Typo | Inspiration" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.matserra.design/typo/" />
      <meta property="og:image" content="https://www.matserra.design/static/seo/homepage.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="2396" />
      <meta property="og:image:height" content="2375" />
      <meta property="og:description" content="To increase an edtech startup notoriety, I created ten typographical works based on famous quotes. They were used in facebook posts, upon bags distributed during shows, and posters offered to teachers for their classrooms." />
      <meta property="og:locale" content="fr_FR" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@Mathilde__serra" />
      <meta name="twitter:title" content="Mathilde SERRA - Typography posters | Illustration | Typo | Inspiration" />
      <meta name="twitter:description" content="To increase an edtech startup notoriety, I created ten typographical works based on famous quotes. They were used in facebook posts, upon bags distributed during shows, and posters offered to teachers for their classrooms." />
      <meta name="twitter:creator" content="@Mathilde__serra" />
      <meta name="twitter:image" content="https://www.matserra.design/static/seo/homepage.png" />

      <link href="/static/style/main.css" rel="stylesheet" />
    </Head>
    <style jsx global>{`
      html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }
       body > div:first-child, #__next, #__next > div:first-child, #__next > div:first-child > div:first-child  {
        height: 100%;
        margin: 0;
      }
    `}</style>
    <App initialState={getProjectInitialStateByKey(TYPO_KEY, get(url, 'query.notransition'))} />
  </div>
)



export default Page
