import Link from "next/link";

interface NavListProps {
  title: string;
  links: { text: string; href: string }[];
}

export default function NavList({ title, links }: NavListProps) {
  return (
    <div className="w-full">
      <p
        className="py-3 text-center font-medium leading-[1.1rem] text-white
        lg:text-start">
        {title}
      </p>

      <ul>
        {links.map(({ href, text }, index) => (
          <li key={index} className="py-3 text-center lg:text-start">
            <Link className="p-md text-[#E2E8F0]" href={href}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
