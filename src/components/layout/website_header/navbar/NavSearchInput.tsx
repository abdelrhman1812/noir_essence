"use client";

import { Input } from "@/src/components/atoms/input";
import { Search } from "lucide-react";

const NavSearchInput = () => {
  return (
    <div className="flex-1 w-full lg:w-auto order-last lg:order-0 mt-2 lg:mt-0">
      <Input
        icon={Search}
        name={"search"}
        placeholder="Search fragrance or brand …"
        iconPosition="left"
        className="w-full"
      />
    </div>
  );
};

export default NavSearchInput;
