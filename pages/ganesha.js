import Head from 'next/head'
import Link from 'next/link'
import App from '../src/components/app'

import get from 'lodash/get'
import { getProjectInitialStateByKey, GANESHA_KEY } from '../src/utils/project'

const Page = ({ url }) => (
  <div className='generic-text'>
    <Head>
      <meta charset="UTF-8" />
      <meta name="google-site-verification" content="ttfHHfD2dU8BUV7DXBlA_ywxnQV_HCocu40xBGLmtVI" />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name="robots" content="index,follow" />

      <link rel="icon" href="https://www.matserra.design/static/about/logo-part1.svg" />
      <link rel="canonical" href="https://www.matserra.design/ganesha/" />
      <title>Mat SERRA - Ganesha drawing | Illustration | Handmade | Posca</title>

      <meta itemprop="name" content="Mat SERRA - Ganesha drawing | Illustration | Handmade | Posca" />
      <meta itemprop="description" content="Ganesha related drawing with only posca markers. Size: 180x180cm (6ftx6ft)." />
      <meta itemprop="image" content="https://www.matserra.design/static/seo/homepage.png" />

      <meta name="description" content="Ganesha related drawing with only posca markers. Size: 180x180cm (6ftx6ft)." />
      <meta name="keywords" content="designer, artistic director, directeur artistique, start-up, web, mobile, tablet, tablette, apps, applications, com, marketing, illustration, design" />
      <meta name="author" content="Mat SERRA" />

      <meta property="og:title" content="Mat SERRA - Ganesha drawing | Illustration | Handmade | Posca" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.matserra.design/ganesha/" />
      <meta property="og:image" content="https://www.matserra.design/static/seo/homepage.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="2396" />
      <meta property="og:image:height" content="2375" />
      <meta property="og:description" content="Ganesha related drawing with only posca markers. Size: 180x180cm (6ftx6ft)." />
      <meta property="og:locale" content="fr_FR" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@Mathilde__serra" />
      <meta name="twitter:title" content="Mat SERRA - Ganesha drawing | Illustration | Handmade | Posca" />
      <meta name="twitter:description" content="Ganesha related drawing with only posca markers. Size: 180x180cm (6ftx6ft)." />
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
    <App initialState={getProjectInitialStateByKey(GANESHA_KEY, get(url, 'query.notransition'))} />
  </div>
)



export default Page
