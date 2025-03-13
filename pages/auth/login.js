import Layout from "@/components/Layout";

export default function Login() {
  return (
    <Layout title="Login">  {/* get env variable */}
      <div className="px-10">
        <h1 className="text-4xl font-bold text-blue-500">Login</h1>
      </div>
    </Layout >
  );
}
