import Layout from "@/components/Layout";

export default function Index({ posts }) {
  console.log(posts);

  return (
    <Layout title="Index">
      <div className="px-10">
        <h1 className="text-4xl font-bold text-blue-500">Posts</h1>
        <div className="pt-2">
          {posts.map((post) => (
            <div key={post.id} className="border-b border-gray-300 py-2">
              <p className="text-sm hover:text-blue-500">{post.id}. {post.title}</p>
            </div>
          ))}
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
