import Layout from '@/components/Layout'
import Post from '@/components/Post'
import Link from 'next/link'
import { getPosts } from '@/lib/posts'

export default function HomePage({posts}) {
  return (
    <Layout>
      <h1 className='text-2xl border-b-4 p-5'>Latest Posts</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {posts.map((post, index) => (<Post key={index} post={post} />))}
      </div>
      <Link href='/posts'>
        <a>More Posts</a>
      </Link>
      <h1 className='text-2xl border-b-4 p-5'>Latest Projects</h1>
    </Layout>
  )
}

export async function getStaticProps() {
  // return the posts data (slug + frontmatter)
  return {
    props: {
      posts: getPosts().slice(0, 6),
    },
  }
}
