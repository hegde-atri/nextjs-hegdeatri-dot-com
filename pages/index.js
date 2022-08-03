import Layout from "@/components/Layout";
// import Post from "@/components/Post";
// import Link from "next/link";
// import { getPosts } from "@/lib/posts";

export default function HomePage({  }) {
  return (
    <Layout>
      
    </Layout>
  );
}

export async function getStaticProps() {
  // return the posts data (slug + frontmatter)
  return {
    props: {
      // posts: getPosts().slice(0, 6),
    },
  };
}
