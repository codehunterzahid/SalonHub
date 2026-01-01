import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Scissors } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Scroll link class
  const scrollLinkClass = (id) =>
    activeSection === id
      ? "block bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-medium"
      : "block text-gray-700 cursor-pointer hover:text-purple-600 font-medium transition";

  // Scroll handler
  const scrollToSection = (id) => {
    setOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Auto-detect active section on scroll
  useEffect(() => {
    const sections = ["hero", "features", "services", "working", "testimonials", "about"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center text-2xl gap-2 font-bold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-linear-to-r from-purple-500 to-pink-500">
            <Scissors className="text-white" size={24} />
          </div>
          SalonHub
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <button onClick={() => scrollToSection("hero")} className={scrollLinkClass("hero")}>
            Home
          </button>
          <button onClick={() => scrollToSection("features")} className={scrollLinkClass("features")}>
            Features
          </button>
          <button onClick={() => scrollToSection("services")} className={scrollLinkClass("services")}>
            Services
          </button>
          <button onClick={() => scrollToSection("working")} className={scrollLinkClass("working")}>
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className={scrollLinkClass("testimonials")}
          >
            Testimonials
          </button>
          <button onClick={() => scrollToSection("about")} className={scrollLinkClass("about")}>
            About
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4">
          <NavLink to="/login" className="text-gray-700 hover:text-purple-600 font-medium pt-2">
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="px-5 py-2 rounded-md text-white font-medium
              bg-linear-to-r from-purple-500 to-pink-500 hover:opacity-90 transition"
          >
            Sign Up
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-6 space-y-4">
          <button onClick={() => scrollToSection("hero")} className={scrollLinkClass("hero")}>
            Home
          </button>
          <button onClick={() => scrollToSection("features")} className={scrollLinkClass("features")}>
            Features
          </button>
          <button onClick={() => scrollToSection("services")} className={scrollLinkClass("services")}>
            Services
          </button>
          <button onClick={() => scrollToSection("working")} className={scrollLinkClass("working")}>
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className={scrollLinkClass("testimonials")}
          >
            Testimonials
          </button>
          <button onClick={() => scrollToSection("about")} className={scrollLinkClass("about")}>
            About
          </button>

          <div className="pt-4 flex gap-4">
            <NavLink to="/login" className="text-gray-700 hover:text-purple-600 font-medium">
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="px-5 py-2 rounded-md text-white font-medium
                bg-linear-to-r from-purple-500 to-pink-500 hover:opacity-90 transition"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
