import React, { useEffect } from "react";
import { Link } from "react-router";
<<<<<<< HEAD

export default function NotFound() {
    useEffect(() => { document.title = "ToyTopia - 404 Not Found"; }, []);
    return (
        <div className="flex flex-col items-center justify-center py-24">
            <h1 className="text-6xl font-extrabold mb-4">404</h1>
            <p className="text-lg mb-6">Oops — page not found.</p>
            <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded">Go Home</Link>
        </div>
    );
=======
import Error from "../assets/error-404.png";
export default function NotFound() {
  useEffect(() => {
    document.title = "ToyTopia - 404 Not Found";
  }, []);
  return (
    <div className="flex flex-col items-center justify-center py-24">
      {/*<h1 className="text-6xl font-extrabold mb-4">404</h1>*/}
      <img src={Error} alt="" />
      <p className="text-lg mb-6 font-bold ">Oops — page not found.</p>
      <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded">
        Go Home
      </Link>
    </div>
  );
>>>>>>> 44ba30f ( Meaningful Message)
}
