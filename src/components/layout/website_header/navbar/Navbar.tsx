"use client";

import { Button } from "@/src/components/atoms/Button";
import { Input } from "@/src/components/atoms/input";
import { Heart, Menu, Search, ShoppingCart, SprayCan, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { id: "1", label: "New Arrivals" },
  { id: "2", label: "Bestsellers" },
  { id: "3", label: "Oud" },
  { id: "4", label: "Woody" },
  { id: "5", label: "Fresh" },
  { id: "6", label: "Niche" },
  { id: "7", label: "Collections" },
  { id: "8", label: "Brands" },
  { id: "9", label: "Offers" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b transition-colors duration-300 relative">
      {/* Main Row */}
      <div className="flex items-center justify-between px-4 lg:px-7 py-3 lg:py-5 gap-3 lg:gap-5 flex-wrap lg:flex-nowrap">
        {/* Mobile Hamburger & Logo Container */}
        <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-start">
          <div className="flex items-center gap-2">
            <Button
              className="lg:hidden"
              variant="ghost"
              color="secondary"
              size="sm"
              icon={isMobileMenuOpen ? X : Menu}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            />
            {/* Logo */}
            <div className="flex flex-col gap-[2px] lg:gap-[3px] flex-shrink-0 cursor-pointer">
              <div className="flex items-center gap-[6px] lg:gap-[10px]">
                <SprayCan className="w-5 h-5 lg:w-6 lg:h-6" />
                <span className="font-bold sm:text-lg lg:text-xl md:font-normal">
                  Noir Essence
                </span>
              </div>
              <span className="text-primary text-[9px] lg:text-[10px] transition-colors duration-300">
                Men&apos;s Fine Fragrances
              </span>
            </div>
          </div>

          {/* Action Icons - Mobile */}
          <div className="flex items-center gap-1 lg:hidden">
            <Button
              variant="ghost"
              color="secondary"
              size="sm"
              icon={Heart}
            ></Button>
            <Button
              className="relative"
              variant="ghost"
              color="secondary"
              size="sm"
              icon={ShoppingCart}
            >
              <span className="bg-danger-500 absolute top-0 right-1 h-[14px] w-[14px] flex justify-center items-center rounded-full text-white text-[9px]">
                3
              </span>
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 w-full lg:w-auto order-last lg:order-none mt-2 lg:mt-0">
          <Input
            icon={Search}
            name={"search"}
            placeholder="Search fragrance or brand …"
            iconPosition="left"
            className="w-full"
          />
        </div>

        {/* Action Icons - Desktop */}
        <div className="hidden lg:flex items-center gap-1 flex-shrink-0">
          <Button
            variant="ghost"
            color="secondary"
            size="sm"
            icon={Heart}
          ></Button>
          <Button
            className="relative"
            variant="ghost"
            color="secondary"
            size="sm"
            icon={ShoppingCart}
          >
            <span className="bg-danger-500 absolute top-0 right-1 h-4 w-4 flex justify-center items-center rounded-full text-white text-[10px]">
              3
            </span>
          </Button>
        </div>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden lg:flex items-center justify-center auto-cols-auto gap-6 py-1 border-t transition-colors duration-300">
        {NAV_LINKS.map((link, i) => (
          <div key={link.id} className="group flex items-center">
            {i > 0 && <span className="w-px h-3 bg-border mx-1" />}
            <Link
              className="relative py-3 px-4 text-[10px] tracking-[0.18em] uppercase transition-colors duration-150 text-muted-foreground group-hover:text-foreground"
              href={"/"}
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
        ))}
      </div>

      {/* Mobile Nav Links Dropdown */}
      <div
        className={`lg:hidden flex flex-col bg-background shadow-lg absolute z-50 w-full transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 max-h-[400px] border-b"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-3 flex flex-col gap-[2px]">
          {NAV_LINKS.map((link) => (
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
    </nav>
  );
};

export default Navbar;
