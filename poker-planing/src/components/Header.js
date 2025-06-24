import Link from 'next/link'

export default function Header() {
  return (
    <header style={{ padding: '1rem', background: '#333', color: 'white' }}>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/" legacyBehavior><a>Home</a></Link>
      </nav>
    </header>
  )
}
