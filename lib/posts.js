import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '@/utils/index'

// get all the files from posts directory
const files = fs.readdirSync(path.join('posts'))

export function getPosts() {
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
  return posts.sort(sortByDate)
}