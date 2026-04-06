import { useState } from "react";
import demitasseLogo from "../assets/demitasse_energies_logo.jpeg";

type NavbarProps = {
  dark: boolean;
  onToggleDark: () => void;
};

export default function Navbar({ dark, onToggleDark }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-[#020e31] border-b border-gray-200 dark:border-gray-800 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#">
          <img src={demitasseLogo} alt="Logo" className="h-10 w-10" />
        </a>

        <div className="hidden md:flex space-x-8 items-center text-gray-600 dark:text-gray-300">
          <a href="#" className="hover:text-black dark:hover:text-white">
            Home
          </a>
          <a href="#" className="hover:text-black dark:hover:text-white">
            About
          </a>
          <a href="#" className="hover:text-black dark:hover:text-white">
            Services
          </a>
          <button onClick={onToggleDark} className="text-sm dark:text-white">
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={onToggleDark} className="text-sm dark:text-white">
            {dark ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="dark:text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 pb-4 dark:text-white">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
        </div>
      )}
    </nav>
  );
}
