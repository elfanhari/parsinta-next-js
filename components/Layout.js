import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title ? props.title + " | " + process.env.appName : process.env.appName}</title>
        <link rel="icon" href="https://vanzdev.com/img/new-logo/CIRCLE%20LOGO%20-%20White%20Blue.png" />
      </Head>
      <Navbar />
      <div className="mt-8">
        {props.children}
      </div>
    </div>
  );
}
