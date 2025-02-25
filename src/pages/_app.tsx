import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <Component {...pageProps} />
      <Footer />
      <SpeedInsights route={router.pathname} />
    </>
  )
}
