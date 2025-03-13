import Layout from "../../../components/Layout";
import { useRouter } from "next/router";
import BlogPost from "@/components/BlogPost";

export default function Index({ posts }) {
  const router = useRouter();

  return (
    <Layout title="Posts">
      <div className="px-10">
        <h1 className="text-4xl font-bold text-blue-500">Posts</h1>
        <div className="pt-2">
          <div className="flex">
            <div className="w-1/2">

              <BlogPost pagination={posts.meta.links} data={posts.data} />

              <div className="my-8">
                {/* {props.children} */}
              </div>

              <footer className="pt-8 border-top">
                lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
              </footer>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(process.env.apiPosts + `?page=${params.page}`);
  const posts = await response.json();

  return {
    props: {
      posts: posts
    }
  }
}
