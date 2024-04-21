import Link from "next/link";

import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-[#FFFBEB]">
      <header
        className="mx-auto box-content flex max-w-container items-center
        justify-between p-4 lg:px-20 lg:py-6">
        <h1 className="h5 text-primary">
          <Link href="/">Collers</Link>
        </h1>

        <MobileMenu />

        <Navbar
          links={[
            { text: "Products", href: "#" },
            { text: "Solutions", href: "#" },
            { text: "Pricing", href: "#" },
            { text: "Resources", href: "#" },
            { text: "Log In", href: "#" },
            { text: "Sign up now", href: "#", outline: true },
          ]}
        />
      </header>
    </div>
  );
}
