import Head from 'next/head'
import Link from 'next/link'
import App from '../src/components/app-bar'
export default () => (
  <div className='generic-text'>
    <Head>
      <title>Book 🤔</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
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
    <App />
  </div>
)
