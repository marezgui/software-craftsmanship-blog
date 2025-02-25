import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import Link from 'next/link' // Ajout de Link pour la navigation interne
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Accueil" />
      <div className={sharedStyles.layout}>
        <img
          src="/vercel-and-notion.png"
          height="85"
          width="250"
          alt="Vercel + Notion"
        />
        <h1>Mon Blog sur le Software Craftsmanship</h1>
        <h2>Un voyage dans l’artisanat du code avec Next.js et Notion</h2>

        <Features />

        <div className="explanation">
          <p>
            Bienvenue sur mon blog dédié au{' '}
            <strong>software craftsmanship</strong> ! Ici, j’explore comment
            écrire du code de qualité, propre et durable. Ce site est construit
            avec <ExtLink href="https://nextjs.org">Next.js</ExtLink>, utilise{' '}
            <ExtLink href="https://notion.so">Notion</ExtLink> comme backend, et
            est hébergé sur <ExtLink href="https://vercel.com">Vercel</ExtLink>.
            Pour l’instant, j’ai écrit deux articles introductifs pour partager
            mes premiers pas dans cette approche.
          </p>

          <p>
            Envie d’en savoir plus ?{' '}
            <Link href="/blog">
              <a style={{ color: '#0070f3', textDecoration: 'underline' }}>
                Découvrez mes articles sur le blog !
              </a>
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
