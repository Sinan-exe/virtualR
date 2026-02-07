import { useState } from "react";
import logo from "/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  function toggleNavbar() {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }
  return (
    <nav className="sticky top-0 border-b border-neutral-700/80 py-3 backdrop-blur-lg">
      <div className="container relative mx-auto px-4 text-sm">
        <div className="flex items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <img className="mr-2 h-10 w-10" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden space-x-12 lg:flex">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="item-center hidden justify-center space-x-12 lg:flex">
            <a href="#" className="rounded-md border px-3 py-2">
              Sign In
            </a>
            <a
              href="#"
              className="rounded-md bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2"
            >
              Create an Account
            </a>
          </div>
          <div className="block flex-col justify-end md:flex lg:hidden">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 flex w-full flex-col items-center justify-center bg-neutral-900 p-12 lg:hidden">
            <ul className="mb-6 space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="rounded-lg border px-3 py-2">
                Sign In
              </a>
              <a
                href="#"
                className="rounded-lg border bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2"
              >
                Create an Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
