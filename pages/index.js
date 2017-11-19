import Head from 'next/head'
import Link from 'next/link'
import App from '../src/components/app'
export default () => (
  <div className='generic-text'>
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
       body > div:first-child, #__next, #__next > div:first-child, #__next > div:first-child > div:first-child  {
        height: 100%;
        margin: 0;
      }
      .clickable:hover {
        cursor: pointer;
      }
      .transitions {
        -webkit-transition			: all .5s  ;
        -moz-transition				: all .5s  ;
        -ms-transition				: all .5s  ;
        -o-transition 				: all .5s  ;
        transition 					: all .5s  ;
      }
      .hide {
        display: none;
      }
      .generic-text{
        text-rendering: optimizelegibility;
        font-smooth: always;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: rgba(0,0,0,0.8);
      }
    `}</style>
    <App />
  </div>
)
