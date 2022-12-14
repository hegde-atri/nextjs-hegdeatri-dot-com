import Layout from "@/components/Layout";
import Post from "@/components/Post";
import fs from "fs";
import path from "path";
import { POSTS_PER_PAGE } from "@/config/index";
import Paginator from "@/components/Paginator";
import { getPosts } from "@/lib/posts";

export default function PostsPage({ posts, numPages, currentPage }) {
  return (
    <Layout>
      <h1 className="text-3xl border-b-4 p-5 text-center font-semibold">Posts</h1>
      <div className="mx-auto w-3/4 grid grid-cols-1">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
      <div className="mx-auto grid grid-cols-1 place-content-center">
      <Paginator
        currentPage={currentPage}
        numPages={numPages}
        parentPage="posts"
      />
      </div>
      
    </Layout>
  );
}

export async function getStaticPaths() {
  // get all the files from posts directory
  const files = fs.readdirSync(path.join("posts"));
  // calculate number of pages
  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);
  // we want the urls to be: /page/1, /page/2 ...
  let paths = [];
  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    });
  }
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // set page_index to 1 when not specified
  const page = parseInt((params && params.page_index) || 1);

  // get all the files from posts directory
  const files = fs.readdirSync(path.join("posts"));
  const posts = getPosts();

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);
  const pageIndex = page - 1;
  const orderedPosts = posts.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  );
  // return the posts data (slug + frontmatter)
  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
    },
  };
}
