import Head from 'next/head'
import Header from './Header'

export default function Layout({title, keywords, description, children}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords}/>
        <meta name='description' content={description}/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Header></Header>

      <main className='container mx-auto my-7'>{children}</main>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Welcome to hegdeatri\'s website',
  keywords: 'Blog, development, linux, programming',
  description: 'A personal website with posts and wikis'

}