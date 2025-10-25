import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config.js";
import toast from "react-hot-toast";

const auth = getAuth(app);

export default function Login() {
  useEffect(() => { document.title = "ToyTopia - Login"; }, []);

  const navigate = useNavigate();
  const location = useLocation();
  // If user tried to access protected route, router will set location.state?.from
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success("Logged in with Google");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error("Google login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Login to ToyTopia</h2>

      <form onSubmit={handleEmailLogin} className="space-y-3">
        <input
          className="w-full p-2 border rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />

        <input
          className="w-full p-2 border rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />

        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-60"
          >
            {loading ? "Logging..." : "Login"}
          </button>

          {/* Pass current email to forgot page so it can prefill */}
          <Link to="/forgot" state={{ email }} className="text-sm text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </div>
      </form>

      <div className="mt-4">
        <button onClick={handleGoogle} className="w-full border py-2 rounded">
          Continue with Google
        </button>
      </div>

      <p className="text-sm mt-4 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
      </p>
    </div>
  );
}
