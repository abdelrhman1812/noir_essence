import { Button } from "@/src/components/atoms/Button";
import { Heart, ShoppingCart, SprayCan } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const NavbarMobile = dynamic(() => import("./NavbarMobile"));
const NavSearchInput = dynamic(() => import("./NavSearchInput"));

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
  return (
    <nav className="w-full border-b transition-colors duration-300 relative">
      {/* Main Row */}
      <div className="flex items-center justify-between px-4 lg:px-7 py-3 lg:py-5 gap-3 lg:gap-5 flex-wrap lg:flex-nowrap">
        {/* Mobile Hamburger & Logo Container */}
        <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-start">
          <div className="flex items-center gap-2">
            <NavbarMobile navLinks={NAV_LINKS} />
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

        <NavSearchInput />

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
            {i > 0 && <span className="w-px h-3 bg-border  mx-1" />}
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
    </nav>
  );
};

export default Navbar;
