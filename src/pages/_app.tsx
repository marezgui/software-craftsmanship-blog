import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <Component {...pageProps} />
      <Footer />

      <Analytics />
      <SpeedInsights route={router.pathname} />
    </>
  )
}
