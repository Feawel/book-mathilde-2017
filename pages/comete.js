import Head from 'next/head'
import Link from 'next/link'
import App from '../src/components/app'

import get from 'lodash/get'
import { getProjectInitialStateByKey, COMETE_KEY } from '../src/utils/project'

const Page = ({ url }) => (
  <div className='generic-text'>
    <Head>
      <meta name="google-site-verification" content="ttfHHfD2dU8BUV7DXBlA_ywxnQV_HCocu40xBGLmtVI" />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name="robots" content="index,follow" />

      <link rel="icon" href="https://www.matserra.design/static/favicon/favicon-02.png" />
      <link rel="canonical" href="https://www.matserra.design/comete/" />
      <title>Mathilde SERRA - Comet exhibit | Science | Space exploration</title>

      <meta name="description" content="Conception, UX & UI of a scientific exhibition website to explain the result of the Churyumov-Gerasimenko comet thanks to Rosetta space probe." />
      <meta name="keywords" content="designer, artistic director, directeur artistique, start-up, web, mobile, tablet, tablette, apps, applications, com, marketing, illustration, design" />
      <meta name="author" content="Mathilde SERRA" />

      <meta property="og:title" content="Mathilde SERRA - Comet exhibit | Science | Space exploration" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.matserra.design/comete/" />
      <meta property="og:image" content="https://www.matserra.design/static/seo/homepage.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="2396" />
      <meta property="og:image:height" content="2375" />
      <meta property="og:description" content="Conception, UX & UI of a scientific exhibition website to explain the result of the Churyumov-Gerasimenko comet thanks to Rosetta space probe." />
      <meta property="og:locale" content="fr_FR" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@Mathilde__serra" />
      <meta name="twitter:title" content="Mathilde SERRA - Comet exhibit | Science | Space exploration" />
      <meta name="twitter:description" content="Conception, UX & UI of a scientific exhibition website to explain the result of the Churyumov-Gerasimenko comet thanks to Rosetta space probe." />
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
    <App initialState={getProjectInitialStateByKey(COMETE_KEY, get(url, 'query.notransition'))} />
  </div>
)



export default Page
