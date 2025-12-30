import { useState } from "react";
import { User, Presentation, Briefcase, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export const SideNavbar = () => {
  const links = [
    { label: "Home", link: "#Home", icon: User },
    { label: "Projects", link: "#Projects", icon: Presentation },
    { label: "Experience", link: "#Experience", icon: Briefcase },
    { label: "Contact", link: "#Contact", icon: Mail },
  ];
  const [active, setActive] = useState("#Home");

  return (
    <div className="fixed right-10 top-1/2 -translate-y-1/2 bg-black border border-neutral-500 pt-4 rounded-full z-10 lg:block">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.link}
            onClick={() => setActive(link.link)}
            className={cn(
              "text-neutral-400 flex items-center gap-2 hover:text-primary transition-colors duration-200 mb-6 px-4",
              active === link.link && "text-primary"
            )}
          >
            <Icon className="size-5" />
          </a>
        );
      })}
    </div>
  );
};
