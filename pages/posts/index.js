import Layout from '../../components/Layout'
import Post from '../../components/Post'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '../../utils'

export default function PostsPage({posts}) {
  return (
    <Layout>
      <h1 className='text-2xl border-b-4 p-5'>Posts</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {posts.map((post, index) => (<Post key={index} post={post} />))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // get all the files from posts directory
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    // remove the file extension of .md from each file
    const slug = filename.replace('.md', '')
    // read the file
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    // parse the front matter using gray matter
    const { data: frontmatter } = matter(markdownWithMeta)
    // return slug, actual path and frontmatter
    return {
      slug,
      frontmatter,
    }
  })
  // return the posts data (slug + frontmatter)
  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
