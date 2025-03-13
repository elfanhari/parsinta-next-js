import Layout from "@/components/Layout";
import Link from "next/link";

export default function Index({ posts }) {
  console.log(posts);

  return (
    <Layout title="Index">
      <div className="px-10">
        <h1 className="text-4xl font-bold text-blue-500">Posts</h1>
        <div className="pt-2">
          <div className="flex">
            <div className="w-1/2">
              {posts.map((post) => (
                <Link href={`/posts/${post.slug}`} key={post.id} className="block hover:bg-blue-500 hover:text-white border border-gray-400 p-4 rounded-lg mb-5">
                  <p>{post.id}. {post.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(process.env.apiPosts);
  const posts = await response.json();

  return {
    props: {
      posts: posts.data
    }
  }
}
