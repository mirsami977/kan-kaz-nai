import React from "react";
import { Link, NavLink } from "react-router";
import { useAuth } from "../hooks/useAuth.js";
import { getAuth, signOut } from "firebase/auth";
import logo from "../assets/Gemini_Generated_Image_gs16iygs16iygs16-removebg-preview.png";

export default function Navbar() {
  const { user } = useAuth(); // Firebase auth hook
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => alert("Logged out successfully!"))
      .catch((err) => console.log(err.message));
  };

  return (
    <nav className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="ToyTopia" className="w-13 h-13 rounded-full" />
          <h1 className="font-extrabold text-xl tracking-wide">ToyTopia</h1>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-6 font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-200"
              }
            >
              Home
            </NavLink>
          </li>

          {user && (
            <>
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-300" : "hover:text-yellow-200"
                  }
                >
                  My Profile
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/extra"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-300" : "hover:text-yellow-200"
                  }
                >
                  My Toys
                </NavLink>
              </li>
            </>
          )}
        </ul>

        {/* User Section */}
        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="relative group">
                <Link to="/profile">
                  <img
                    src={user.photoURL || "https://i.ibb.co/9rKc5h3/user.png"}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white cursor-pointer hover:scale-110 transition-transform"
                  />
                </Link>
                <span className="absolute hidden group-hover:block bg-white text-gray-800 text-sm rounded-md p-1 mt-1 whitespace-nowrap">
                  {user.displayName || "User"}
                </span>
              </div>

              <button
                onClick={handleLogout}
                className="bg-white text-blue-600 px-3 py-1 rounded font-semibold hover:bg-yellow-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-white text-blue-600 px-4 py-1 rounded font-semibold hover:bg-yellow-200"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
