'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

function NavItem({ currentRoute, linkHref }: { currentRoute: string, linkHref: string}) {
  return <Link href={linkHref} className={clsx('nav-item', currentRoute === linkHref && 'active')}>Fishes</Link>;
}

export default function Nav() {
  const currentRoute = usePathname();
  
  return (
    <header>
      <Link href="/" className="nav-home flex items-center m-4">
        <img src="https://echoesoftheplumgrove.wiki.gg/images/Site-logo.png?c65ed2" alt="Echoes of the Plum Grove logo" width="40" />
        <span>Tracker</span>
      </Link>

      <NavItem currentRoute={currentRoute} linkHref="/fishes" />
    </header>
  );
}
