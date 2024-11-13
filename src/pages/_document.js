import Footer from "@/Components/Footer/footer";
import Header from "@/Components/Header/header";
import { Html, Head, Main, NextScript } from "next/document";
import Shop from "./shop";

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning={true}>
      <Head />

      <body className="antialiased">
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
