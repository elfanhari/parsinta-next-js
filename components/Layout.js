import Head from "next/head";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title ? props.title + ' - VANZDEV' : 'VANZDEV'}</title>
        <link rel="icon" href="https://vanzdev.com/img/new-logo/CIRCLE%20LOGO%20-%20White%20Blue.png" />
      </Head>
      {props.children}
    </div>
  );
}
