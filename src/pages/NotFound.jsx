import React, { useEffect } from "react";
import { Link } from "react-router";
import Error from "../assets/error-404.png";

export default function NotFound() {
  useEffect(() => {
    document.title = "ToyTopia - 404 Not Found";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-24">
      {/* <h1 className="text-6xl font-extrabold mb-4">404</h1> */}
      <img src={Error} alt="404 Error" />
      <p className="text-lg mb-6 font-bold">Oops — page not found.</p>
      <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded">
        Go Home
      </Link>
    </div>
  );
}
