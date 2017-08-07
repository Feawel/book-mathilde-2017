import Link from 'next/link'

// example header component, prefetch is use to prefetch pages
export default () => (
  <nav>
    <ul>
      <li><Link prefetch href='/'><a>Home</a></Link></li>
      <li><Link prefetch href='/about'><a>About</a></Link></li>
      <li><Link prefetch href='/contact'><a>Contact</a></Link></li>
    </ul>
  </nav>
)
