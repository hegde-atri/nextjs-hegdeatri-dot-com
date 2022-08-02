import CategoryList from "@/components/CategoryList";
import Layout from "@/components/Layout";
import { getPosts } from "@/lib/posts";

export default function CategoriesPage({ uniqueCategories }) {
  return (
    <Layout>
      <CategoryList categories={uniqueCategories} />
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getPosts();
  const categories = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = [...new Set(categories)];
  return {
    props: {
      uniqueCategories,
    },
  };
}
