import { Earth } from "lucide-react";
import { Button } from "../../../atoms/Button";
import ToggleMode from "./ToggleMode";

const TopBar = () => {
  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-secondary-foreground flex  items-center justify-between px-3 py-2 gap-2 sm:gap-0">
        <p className="flex-1 w-full sm:w-auto text-white  text-xs sm:text-[13px] tracking-wider sm:tracking-widest">
          Free shipping on orders above{" "}
          <span className="text-primary">250 EG</span>
          <span className="hidden md:inline">
            &nbsp;·&nbsp; New drop:{" "}
            <span className="text-primary">Oud Noir Intense</span>
          </span>
        </p>

        {/* Btn Lang And Dark Mode */}
        <div className="flex items-center gap-2   justify-center sm:justify-end">
          <Button size="sm" icon={Earth}>
            En
          </Button>
          <ToggleMode />
        </div>
      </div>
    </>
  );
};

export default TopBar;
