import Head from "next/head";
import Header from "./Header";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div className="bg-white dark:bg-dark">
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header className="top-0 z-50"/>

      <main className="container mx-auto my-7 relative">{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: "Welcome to hegdeatri's website",
  keywords: "Blog, development, linux, programming",
  description: "A personal website with posts and wikis",
};
