import '../styles/global.css'

import type { AppProps } from 'next/app'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'

import MainLayout from '../components/layouts/MainLayout'

const progress = new ProgressBar({
  size: 2,
  color: '#c026d3',
  className: 'bar-of-progress',
  delay: 100,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
export default MyApp
