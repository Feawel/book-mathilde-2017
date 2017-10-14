// pages/about.js
import Head from 'next/head'
import Link from 'next/link'
import About from '../src/components/about'

export default () => (
  <div>
    <Head>
      <title>Book 🤔</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700i,900" rel="stylesheet" />
    </Head>
    <style jsx global>{`
      html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }
      .clickable:hover {
        cursor: pointer;
      }
      .transitions {
        -webkit-transition      : all .5s  ;
        -moz-transition       : all .5s  ;
        -ms-transition        : all .5s  ;
        -o-transition         : all .5s  ;
        transition          : all .5s  ;
      }
    `}</style>
    <About />
  </div>
)
