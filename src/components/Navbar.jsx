import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white font-mono relative">
      <h1 className="text-xl font-bold">Intern Projects</h1>

      <div className="flex gap-4 items-center">
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
    </nav>
  );
}
