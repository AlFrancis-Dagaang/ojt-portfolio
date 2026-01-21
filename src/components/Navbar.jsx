import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white font-mono px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Intern Projects</h1>

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden px-3 py-2 border rounded text-white border-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 items-center">
          <Link to="/" className="px-3 py-2 rounded hover:bg-gray-700">
            Home
          </Link>
          <Link to="/cards" className="px-3 py-2 rounded hover:bg-gray-700">
            Cards
          </Link>
          <Link to="/counter" className="px-3 py-2 rounded hover:bg-gray-700">
            Counter
          </Link>
          <Link to="/todolist" className="px-3 py-2 rounded hover:bg-gray-700">
            TodoList
          </Link>

          {/* Dropdown for Desktop */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="px-3 py-2 rounded hover:bg-gray-700 flex items-center gap-1"
            >
              Responsive ▾
            </button>
            {dropdownOpen && (
              <div className="absolute bg-gray-700 rounded shadow-lg mt-2 w-40 z-10">
                <Link
                  to="/responsive"
                  className="block px-4 py-2 hover:bg-gray-600 rounded-t"
                  onClick={() => setDropdownOpen(false)}
                >
                  Responsive 1
                </Link>
                <Link
                  to="/responsive2"
                  className="block px-4 py-2 hover:bg-gray-600"
                  onClick={() => setDropdownOpen(false)}
                >
                  Responsive 2
                </Link>
                <Link
                  to="/responsive3"
                  className="block px-4 py-2 hover:bg-gray-600 rounded-b"
                  onClick={() => setDropdownOpen(false)}
                >
                  Responsive 3
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col gap-2 mt-4 md:hidden">
          <Link
            to="/"
            className="px-3 py-2 rounded hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/cards"
            className="px-3 py-2 rounded hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Cards
          </Link>
          <Link
            to="/counter"
            className="px-3 py-2 rounded hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Counter
          </Link>
          <Link
            to="/todolist"
            className="px-3 py-2 rounded hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            TodoList
          </Link>

          {/* Mobile Dropdown */}
          <div className="flex flex-col">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="px-3 py-2 rounded hover:bg-gray-700 flex items-center justify-between"
            >
              Responsive ▾
            </button>
            {dropdownOpen && (
              <div className="flex flex-col ml-2 mt-1 gap-1">
                <Link
                  to="/responsive"
                  className="px-3 py-2 rounded hover:bg-gray-600"
                  onClick={() => {
                    setDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Responsive 1
                </Link>
                <Link
                  to="/responsive2"
                  className="px-3 py-2 rounded hover:bg-gray-600"
                  onClick={() => {
                    setDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Responsive 2
                </Link>
                <Link
                  to="/responsive3"
                  className="px-3 py-2 rounded hover:bg-gray-600"
                  onClick={() => {
                    setDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Responsive 3
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
