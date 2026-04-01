import React, { useEffect, useState } from "react";
import { Calculator, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center gap-3">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center shadow-md ${
                scrolled ? "bg-blue-600" : "bg-blue-500/90"
              }`}
            >
              <Calculator size={22} className="text-white" />
            </div>

            <h1
              className={`text-2xl font-bold ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              FinExpert
            </h1>
          </div>

          {/* desktop nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <ul
              className={`flex items-center gap-8 lg:gap-10 text-sm font-semibold ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              <li>
                <a href="#services" className="hover:text-blue-500 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-500 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blue-500 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-500 transition">
                  Contact
                </a>
              </li>
            </ul>

            <button
              className={`px-7 py-3 rounded-2xl font-semibold transition ${
                scrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white text-blue-700 hover:bg-gray-100"
              }`}
            >
              Get Started
            </button>
          </div>

          {/* mobile button */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden ${scrolled ? "text-slate-900" : "text-white"}`}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* mobile menu */}
        {open && (
          <div className="md:hidden mt-4 bg-white rounded-2xl shadow-lg p-5">
            <ul className="flex flex-col gap-4 text-slate-900 font-medium">
              <li>
                <a href="#services" onClick={() => setOpen(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={() => setOpen(false)}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>

            <button className="w-full mt-5 bg-blue-600 text-white py-3 rounded-xl font-semibold">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;