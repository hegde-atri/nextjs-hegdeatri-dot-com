import Link from 'next/link'
import Image from 'next/image'
import CategoryLabel from './CategoryLabel'
// import CategoryLabel from './CategoryLabel'

export default function Post({post}) {
  return (
    <div className='w-full px-10 py-6 shadow-md rounded mt-6'>
      <Image src={post.frontmatter.cover_image} alt='' height={420} width={600} className='mb-4 rounded' />
      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600">
          {post.frontmatter.date}
        </span>
        <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
      </div>
      <div className="mt-2">
        <Link href={`/posts/${post.slug}`}>
          <a className=''>{post.frontmatter.title}</a>
        </Link>
        <p className="mt-2 text-gray-600">
          {post.frontmatter.description}
        </p>
      </div>
      <div className="flex justify-between items-center mt-6">
        <Link href={`/posts/${post.slug}`}>
          <a className='text-gray-900 hover:text-blue-600'>Read More</a>
        </Link>
        <div className="flex items-center">
          <Image src={post.frontmatter.author_image} height={25} width={25} alt="" className="mx-10 object-cover rounded-full hidden sm:block" />
          <h3 className="mx-1 text-gray-700 font-bold">{post.frontmatter.author}</h3>
        </div>
      </div>
    </div>
  )
}
