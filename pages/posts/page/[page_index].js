import Layout from '../../../components/Layout'
import Post from '../../../components/Post'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '../../../utils'
import { POSTS_PER_PAGE } from '../../../config'

export default function PostsPage({posts, numPages, currentPage}) {
  return (
    <Layout>
      <h1 className='text-2xl border-b-4 p-5'>Posts</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {posts.map((post, index) => (<Post key={index} post={post} />))}
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  // get all the files from posts directory
  const files = fs.readdirSync(path.join('posts'))
  // calculate number of pages
  const numPages = Math.ceil(files.length / POSTS_PER_PAGE)
  // we want the urls to be: /page/1, /page/2 ...
  let paths = []
  for (let i = 1; i <= numPages; i++){
    paths.push({
      params: {page_index: i.toString()}
    })
  }
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  // set page_index to 1 when not specified
  const page = parseInt(params && params.page_index || 1)

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

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE)
  const pageIndex = page - 1
  const orderedPosts = posts
    .sort(sortByDate)
    .slice(pageIndex * POSTS_PER_PAGE , (pageIndex + 1) * POSTS_PER_PAGE)

  // return the posts data (slug + frontmatter)
  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page
    },
  }
}
