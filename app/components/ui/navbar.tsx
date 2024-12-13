import { Menu } from "lucide-react";
import { buttonVariants } from "./button";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

interface NavbarProps {
  isLogged: boolean;
}

export function Navbar({ isLogged }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Define links in a hashmap for better maintainability
  const links = {
    products: "/products",
    pricing: "/pricing",
    about: "/about",
  };

  return (
    <nav className="h-16 flex items-center align-middle justify-center w-full border-b mb-1 text-sm">
      <div className="px-5 w-full flex items-center justify-between align-middle">
        <div className="flex items-center align-middle justify-start gap-3">
          <a href="/" className="font-bold text-3xl">
            EduToolkit
          </a>
          <div className="hidden md:flex items-center align-middle justify-start gap-4 ml-5 h-full">
            {Object.entries(links).map(([label, href]) => (
              <a
                key={label}
                className="transition-colors hover:text-foreground/80 text-foreground/80"
                href={href}
              >
                {label.charAt(0).toUpperCase() + label.slice(1)}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center align-middle justify-end gap-3">
          {isLogged ? (
            <a
              className={buttonVariants({ variant: "default", size: "sm" })}
              href="/dashboard"
            >
              Dashboard
            </a>
          ) : (
            <a
              className={buttonVariants({ variant: "default", size: "sm" })}
              href="/signin"
            >
              Sign In
            </a>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Menu
                onClick={handleMenuClick}
                className="block md:hidden cursor-pointer"
              />
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle>EduToolkit</SheetTitle>
                <SheetDescription className="flex flex-col justify-center items-start align-middle gap-3">
                  {Object.entries(links).map(([label, href]) => (
                    <a
                      key={label}
                      className="transition-colors hover:text-foreground/80 text-foreground/80"
                      href={href}
                    >
                      {label.charAt(0).toUpperCase() + label.slice(1)}
                    </a>
                  ))}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
