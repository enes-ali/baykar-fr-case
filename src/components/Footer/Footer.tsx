import ExternalLinks from "./ExternalLinks";
import Legal from "./Legal";
import NavList from "./NavList";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] px-4 lg:px-20">
      <div className="mx-auto max-w-container">
        <div
          className="flex flex-col gap-12 border-[#334155] border-y
          py-12 lg:flex-row">
          <NavList
            title="Product"
            links={[
              { text: "Pricing", href: "" },
              { text: "Overview", href: "" },
              { text: "Browse", href: "" },
              { text: "Accessibility", href: "" },
              { text: "Five", href: "" },
            ]}
          />

          <NavList
            title="Solutions"
            links={[
              { text: "Brainstorming", href: "" },
              { text: "Ideation", href: "" },
              { text: "Wireframing", href: "" },
              { text: "Research", href: "" },
              { text: "Design", href: "" },
            ]}
          />

          <NavList
            title="Support"
            links={[
              { text: "Contact Us", href: "" },
              { text: "Developers", href: "" },
              { text: "Documentation", href: "" },
              { text: "Integrations", href: "" },
              { text: "Reports", href: "" },
            ]}
          />

          <ExternalLinks />
        </div>

        <Legal />
      </div>
    </footer>
  );
}
