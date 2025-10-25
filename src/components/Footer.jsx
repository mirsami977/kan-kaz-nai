import React from "react";
import { Link } from "react-router";
import Marquee from "react-fast-marquee";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h3 className="text-lg font-bold mb-2">ToyTopia</h3>
          <p className="text-sm">
            The best place to explore and support local toy sellers. Fun. Safe.
            Creative.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">My Profile</Link>
            </li>
            <li>
              <Link to="/extra">My Toys</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Connect with us</h4>
          <div className="flex justify-center md:justify-start gap-3 text-xl">
            <a href="#" className="hover:text-yellow-300">
              Facebook
            </a>
            <a href="#" className="hover:text-yellow-300">
              📩 Contact
            </a>
            <a href="#" className="hover:text-yellow-300">
              01893901123
            </a>
          </div>
          <p className="text-xs mt-3">© 2025 ToyTopia. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
