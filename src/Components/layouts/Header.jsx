import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detect scroll for sticky background effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between py-3">
        {/* Mobile Logo */}
        <a href="#" className="lg:hidden">
          <img
            src="/logo/pbwhite.png"
            alt="Paperboat Photography Logo"
            className={`h-12 transition-all duration-300 ${
              isScrolled ? "filter-none" : "invert brightness-0"
            }`}
          />
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl focus:outline-none"
        >
          {isOpen ? (
            <X className={`${isScrolled ? "text-black" : "text-white"}`} />
          ) : (
            <Menu className={`${isScrolled ? "text-black" : "text-white"}`} />
          )}
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center justify-between w-full">
          {/* Left Links */}
          <ul className="flex gap-6">
            {["Home", "Services", "Portfolio"].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className={`relative text-lg transition-colors duration-300 ${
                    isScrolled ? "text-black" : "text-white"
                  } group`}
                >
                  {item}
                  <span
                    className={`absolute left-1/2 -bottom-1 h-[3px] w-0 transform -translate-x-1/2 transition-all duration-500 ${
                      isScrolled ? "bg-black" : "bg-white"
                    } group-hover:w-4/5 group-focus:w-4/5`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Center Logo */}
          <a href="#" className="mx-auto">
            <img
              src="/logo/pbblack.png"
              alt="Paperboat Photography Logo"
              className={`h-12 transition-all duration-300 ${
                isScrolled ? "filter-none" : "invert brightness-0"
              }`}
            />
          </a>

          {/* Right Links */}
          <ul className="flex gap-6">
            {["About Us", "Blog", "Contact Us"].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className={`relative text-lg transition-colors duration-300 ${
                    isScrolled ? "text-black" : "text-white"
                  } group`}
                >
                  {item}
                  <span
                    className={`absolute left-1/2 -bottom-1 h-[3px] w-0 transform -translate-x-1/2 transition-all duration-500 ${
                      isScrolled ? "bg-black" : "bg-white"
                    } group-hover:w-4/5 group-focus:w-4/5`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`lg:hidden flex flex-col items-center gap-4 py-4 transition-all duration-300 ${
            isScrolled ? "bg-white text-black" : "bg-black/90 text-white"
          }`}
        >
          {[
            "Home",
            "Services",
            "Portfolio",
            "About Us",
            "Blog",
            "Contact Us",
          ].map((item, i) => (
            <a
              key={i}
              href="#"
              className="relative text-lg group"
              onClick={() => setIsOpen(false)}
            >
              {item}
              <span
                className={`absolute left-1/2 -bottom-1 h-[3px] w-0 transform -translate-x-1/2 transition-all duration-500 ${
                  isScrolled ? "bg-black" : "bg-white"
                } group-hover:w-4/5 group-focus:w-4/5`}
              ></span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
