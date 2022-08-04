import Layout from "@/components/Layout";
import Post from "@/components/Post";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getPosts } from "@/lib/posts";
import CategoryList from '@/components/CategoryList';

export default function CategoryPage({ posts, categoryName, uniqueCategories }) {
  return (
    <Layout>
      <h1 className="text-2xl border-b-4 p-5 capitalize">Category: {categoryName}</h1>
      <div className="inline-flex">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-3/4">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
      <div className='w-1/4 ml-5'>
        <CategoryList categories={uniqueCategories} />
      </div>
      </div>
      
    </Layout>
  );
}

export async function getStaticPaths() {
  const postFiles = fs.readdirSync(path.join("posts"));
  const projectFiles = fs.readdirSync(path.join("projects"));

  const categories1 = postFiles.map((filename) => {
    const postsWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(postsWithMeta);

    return frontmatter.category.toLowerCase();
  });

  const categories2 = projectFiles.map((filename) => {
    const projectsWithMeta = fs.readFileSync(
      path.join("projects", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(projectsWithMeta);

    return frontmatter.category.toLowerCase();
  });

  let categories = categories1.concat(categories2);

  const paths = categories.map((category) => ({
    params: {
      category_name: category,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category_name } }) {
  const posts = getPosts();

  const categories = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = [...new Set(categories)];
  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category_name
  );

  // return the posts data (slug + frontmatter)
  return {
    props: {
      posts: categoryPosts,
      categoryName: category_name,
      uniqueCategories,
    },
  };
}
