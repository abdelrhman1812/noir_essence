"use client";

import { Button } from "@/src/components/atoms/Button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavbarMobile = ({ navLinks }: { navLinks: { id: string; label: string }[] }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Button
        className="lg:hidden"
        variant="ghost"
        color="secondary"
        size="sm"
        icon={isMobileMenuOpen ? X : Menu}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      />
      {/* Mobile Nav Links Dropdown */}
      <div
        className={`lg:hidden flex flex-col bg-background shadow-lg absolute z-50 left-0 top-full w-full transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 max-h-[400px] border-b"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-3 flex flex-col gap-[2px]">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              className="py-3 px-3 text-[11px] tracking-wider uppercase border-b border-border/40 text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors"
              href={"/"}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
