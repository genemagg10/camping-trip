import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function ExtLink({ href, children, className = "" }: Props) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={`text-link ${className}`.trim()}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
