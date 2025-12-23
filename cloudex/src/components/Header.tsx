import { Link } from "react-router-dom";
import darkLogo from "../assets/darkLogo.png";
import whiteLogo from "../assets/whiteLogo.png";
import { useTheme } from "./ui/context/theme-provider";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter:bg-background/60] ">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 ">
        <Link to={"/"}>
          <img
            src={isDark ? darkLogo : whiteLogo}
            className="h-20 w-auto"
            alt="Cloudex_Logo"
          />
        </Link>

      <div>
        {/*  Search  */}

        {/* Theme Toggle */}
        <div onClick={() => setTheme(isDark ? "light" : "dark")} className={`flex items-center cursor-pointer transtition-transform duration-500 ${isDark? "rotate-180": 'rotate-0 transition-all '}`}>

          {isDark? (<Sun className="h-6 w-6 text-yellow-500  rotate-0 "/> ) : (<Moon className="h-6 w-6 text-blue-500 rotate-0 transition-all "/>)}
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
