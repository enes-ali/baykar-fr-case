import { Head, Html, Main, NextScript } from "next/document";

import { roboto } from "~/fonts";

export default function Document() {
  return (
    <Html lang="en" className={roboto.variable}>
      <Head />

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
