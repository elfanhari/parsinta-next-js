import { useEffect } from "react";

import Head from "next/head";
import Layout from "@/components/Layout";

export default function Show({ post }) {
  // console.log(post);

  return (
    <Layout title={post.title}>
      <div className="px-10">
        <h3 className=" text-3xl font-bold text-blue-500 border-b pb-2">{post.title}</h3>
        <div className="my-2 border-b pb-2">{post.body}</div>
        <div className="my-2 ">
          <span className=""> <b> Author : </b></span> <span className="text-blue-500">{post.user.name}</span>
          <br />
          <span className=""> <b>Published :</b> </span> <span className="text-blue-500">{post.created_at}</span>
        </div>
      </div>
    </Layout>
  );
}

// Start Static Path Generation

// export const getStaticPaths = async () => {
//   const response = await fetch(process.env.apiPosts);
//   const posts = await response.json();
//   const paths = posts.data.map(post => ({
//     params: { slug: post.slug }
//   }));
//   return { paths, fallback: false };
// }
//
// export const getStaticProps = async ({ params }) => {
//   const response = await fetch(process.env.apiPosts + `/${params.slug}`);
//   const post = await response.json();
//   return {
//     props: {
//       post: post.data
//     }
//   };
// }

// End Static Path Generation

// Server Side Rendering
export const getServerSideProps = async ({ params }) => {
  const response = await fetch(process.env.apiPosts + `/${params.slug}`);
  const post = await response.json();
  return {
    props: {
      post: post.data
    }
  };
};
