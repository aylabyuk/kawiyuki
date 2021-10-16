import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import client from '../apollo/apolloClient'
import { GET_FEATURED_ARTICLES } from '../apollo/queries'
import HomeLayout, { HomeLayoutProps } from '../components/layouts/HomeLayout'

export const getStaticProps: GetStaticProps<HomeLayoutProps> = async () => {
  const { data } = await client.query({
    query: GET_FEATURED_ARTICLES,
  })

  return {
    props: {
      articles: data.articles,
    },
  }
}

const Home: NextPage<HomeLayoutProps> = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>KawiYuki</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout articles={articles}>Home</HomeLayout>
    </div>
  )
}

export default Home