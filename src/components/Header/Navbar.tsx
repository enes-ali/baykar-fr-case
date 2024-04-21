import { PropsWithChildren, ReactNode } from "react";
import classNames from "classnames";

import { Button } from "../Button";

interface NavIndexProps {
  text: ReactNode;
  href: string;
  outline?: boolean;
}

function NavIndex({
  text,
  href,
  outline = false,
}: PropsWithChildren<NavIndexProps>) {
  return (
    <li className={classNames("text-primary", { "px-2 py-3": !outline })}>
      <Button
        type="link"
        href={href}
        appearance={outline ? "outline" : "link"}
        className={!outline ? "p-0" : undefined}
        textContainerClassName={!outline ? "px-0" : undefined}>
        {text}
      </Button>
    </li>
  );
}

interface NavbarProps {
  links: NavIndexProps[];
}

export default function Navbar({ links }: NavbarProps) {
  return (
    <ul className="hidden items-center gap-4 lg:flex">
      {links.map((link, index) => (
        <NavIndex key={index} {...link} />
      ))}
    </ul>
  );
}
