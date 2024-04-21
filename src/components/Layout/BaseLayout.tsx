import { type PropsWithChildren } from "react";

import { roboto } from "~/fonts";
import { Header } from "../Header";
import Footer from "../Footer/Footer";

interface BaseLayoutProps {}

export default function BaseLayout({
  children,
}: PropsWithChildren<BaseLayoutProps>) {
  return (
    <div
      className={`${roboto.className} ${roboto.variable} bg-layout bg-fixed
      pt-mobileHeader lg:pt-header`}>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
