import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
  { label: 'Contact', page: '/contact' },
  {
    label: 'Source Code',
    link: 'https://github.com/marezgui/software-craftsmanship-blog',
  },
]

const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>
          {titlePre ? `${titlePre} |` : ''} Mon Blog sur le Software
          Craftsmanship
        </title>
        <meta
          name="description"
          content="Premiers Pas en Software Craftsmanship"
        />
        <meta
          name="og:title"
          content="Mon Blog sur le Software Craftsmanship"
        />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@0xMalek" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
