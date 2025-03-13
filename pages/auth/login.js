import Layout from "@/components/Layout";

export default function Register() {
  return (
    <Layout title={process.env.appName}>  {/* get env variable */}
      <h1 className="text-4xl font-bold text-blue-500">Login</h1>
    </Layout >
  );
}
