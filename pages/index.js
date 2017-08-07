import Head from 'next/head'
import Link from 'next/link'
export default () => (
  <div>
    <Head>
      <title>This page has a title 🤔</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <h1>Welcome to next.js!</h1>
    <div>Click <Link href={{ pathname: '/about', query: { name: 'Zeit' }}}><a>here</a></Link> to read more</div>
    {/* replace prevent to push a new Url*/}
    <div>Click <Link href='about' replace><a>here</a></Link> to read more</div>
  </div>
)
