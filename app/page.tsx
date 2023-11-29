import React from "react";
import { client } from "./lib/sanity";
import { Post } from "./lib/interface";
import Link from "next/link";
import { prefetchDNS } from "react-dom";
import HomeIntro from "./components/HomeIntro";

const page = async () => {
  const query = `*[_type=='post']`;
  const data = (await client.fetch(query)) as Post[];
  return (
    <HomeIntro />
    // <div className="divide-y divide-gray-200 dark:divide-gray-700">
    //   <div className="space-y-2 pt-6 pb-8 md:space-y-5">
    //     <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-white-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
    //       All posts
    //     </h1>
    //   </div>
    //   <ul>
    //     {data.map((post) => (
    //       <li key={post._id}>
    //         <Link href={`/post/${post.slug.current}`} prefetch>
    //           {post.title}
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default page;
