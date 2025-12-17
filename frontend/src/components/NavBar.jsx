import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/images/Nav-logo.png";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const linkClass = ({ isActive }) =>
        isActive
            ? "block bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-medium"
            : "block text-gray-700 hover:text-purple-600 font-medium transition";

    return (
        <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">


                <NavLink to="/" className="flex items-center text-2xl gap-2 font-bold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    <img src={Logo} alt="nav-logo" className="w-8 md:w-10 object-contain" />
                    SaloonHub
                </NavLink>

                <div className="hidden md:flex gap-8">
                    <NavLink to="/" className={linkClass}>Home</NavLink>
                    <NavLink to="/features" className={linkClass}>Features</NavLink>
                    <NavLink to="/services" className={linkClass}>Services</NavLink>
                    <NavLink to="/howItWorks" className={linkClass}>How It Works</NavLink>
                    <NavLink to="/testimonials" className={linkClass}>Testimonials</NavLink>
                    <NavLink to="/about" className={linkClass}>About</NavLink>
                </div>

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


                {/*---------------------------- Mobile Menu Button ---------------------*/}

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-gray-700"
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-white shadow-md px-6 py-6 space-y-4">
                    <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>Home</NavLink>
                    <NavLink to="/features" onClick={() => setOpen(false)} className={linkClass}>Features</NavLink>
                    <NavLink to="/services" onClick={() => setOpen(false)} className={linkClass}>Services</NavLink>
                    <NavLink to="/testimonials" onClick={() => setOpen(false)} className={linkClass}>Testimonials</NavLink>
                    <NavLink to="/howItWorks" onClick={() => setOpen(false)} className={linkClass}>How It Works</NavLink>
                    <NavLink to="/about" onClick={() => setOpen(false)} className={linkClass}>About</NavLink>


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
