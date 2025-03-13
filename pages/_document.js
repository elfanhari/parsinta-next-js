import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="custom" content="Da" />
      </Head>
      <body className="antialiased font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
