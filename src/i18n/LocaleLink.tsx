import { Link, type LinkProps } from "react-router-dom";

type Props = Omit<LinkProps, "to"> & { href: string };

/** Internal link — English-only site, no locale prefix. */
export function LocaleLink({ href, ...props }: Props) {
  return <Link to={href} {...props} />;
}
