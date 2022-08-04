import Layout from "@/components/Layout";
import Search from '@/components/Search';
import Socials from '@/components/Socials';
import Image from 'next/image'
// import Post from "@/components/Post";
// import Link from "next/link";
// import { getPosts } from "@/lib/posts";

export default function HomePage({  }) {
  return (
    <Layout>
      <div className="p-5 text-center">
        <div className="p-5">
          <h1 className='text-4xl pb-5 dark:text-white'>Atri Hegde</h1>
          <h2 className='text-base text-opacity-90 text-slate-600 dark:text-subtext1 italic'>&quot;The bridge between dreams and reality is hard work.&quot;</h2>
          <div className='p-5'>
          <Image src="/images/avatar.jpg" alt="profile-pic" height={200} width={200} className="rounded-full" />
          </div>          
        </div>
        <div className='border-y-2 text-text'>
          <p>I am a student at Reigate College studying Physics, Mathematics, Chemistry and Computer Science for my A-levels.</p>
        </div>
        <div className='w-3/4 mx-auto pt-5'>
          <Socials />
        </div>
      </div>
      <Search />
      
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
