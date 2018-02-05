import Head from 'next/head'
import Link from 'next/link'
import get from 'lodash/get'
import App from '../src/components/app'

const Page = ({ url }) =>
  <div className='generic-text'>
    <Head>
      <meta charset="UTF-8" />
      <meta name="google-site-verification" content="ttfHHfD2dU8BUV7DXBlA_ywxnQV_HCocu40xBGLmtVI" />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name="robots" content="index,follow" />

      <link rel="icon" href="https://www.matserra.design/static/favicon/favicon-02.png" />
      <link rel="canonical" href="https://www.matserra.design" />
      <title>Mathilde SERRA - Artistic Director</title>

      <meta itemprop="name" content="Mathilde SERRA - Artistic Director" />
      <meta itemprop="description" content="Hello ! I am an artistic director specialized in the realization of website, application, and web communication, especially in start-up.  I like to explore other forms of creation, such as illustration, typographic creation, video games or interactive installations." />
      <meta itemprop="image" content="https://www.matserra.design/static/seo/homepage.png" />

      <meta name="description" content="Hello ! I am an artistic director specialized in the realization of website, application, and web communication, especially in start-up.  I like to explore other forms of creation, such as illustration, typographic creation, video games or interactive installations." />
      <meta name="keywords" content="designer, artistic director, directeur artistique, start-up, web, mobile, tablet, tablette, apps, applications, com, marketing, illustration, design" />
      <meta name="author" content="Mathilde SERRA" />

      <meta property="og:title" content="Mathilde SERRA - Artistic Director" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.matserra.design" />
      <meta property="og:image" content="https://www.matserra.design/static/seo/homepage.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="2396" />
      <meta property="og:image:height" content="2375" />
      <meta property="og:description" content="Hello ! I am an artistic director specialized in the realization of website, application, and web communication, especially in start-up.  I like to explore other forms of creation, such as illustration, typographic creation, video games or interactive installations." />
      <meta property="og:locale" content="fr_FR" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@Mathilde__serra" />
      <meta name="twitter:title" content="Mathilde SERRA - Artistic Director" />
      <meta name="twitter:description" content="Hello ! I am an artistic director specialized in the realization of website, application, and web communication, especially in start-up.  I like to explore other forms of creation, such as illustration, typographic creation, video games or interactive installations." />
      <meta name="twitter:creator" content="@Mathilde__serra" />
      <meta name="twitter:image" content="https://www.matserra.design/static/seo/homepage.png" />

      <link href="/static/style/main.css" rel="stylesheet" />
      <script src="/static/pure-swipe.min.js"></script>
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

    <App launchTypoAnimation={get(url, 'query.typo')} initialState={{
      currentProject: get(url, 'query.project', 'apps'),
      openMenu: false,
      openAbout: false
    }} />
  </div>



export default Page
