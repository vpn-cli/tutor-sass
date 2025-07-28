"use client"; //as we are using hook so we have to add use client component
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; //cn helps you write conditional className code in a clean, readable, and manageable way.

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

const NavItems = () => {
  const pathname = usePathname(); //
  return (
    <nav className="flex items-center gap-4">
      {navItems.map(
        (
          { label, href } //we are destructuring the label and href for each one
        ) => (
          <Link href={href} key={label} className={cn(pathname === href && 'text-primary font-semibold')}>
            {label}
          </Link> //parenthesis means instant return
        )
      )}
    </nav>
  );
};

export default NavItems;
