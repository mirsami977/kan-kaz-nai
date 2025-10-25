import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config.js";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const auth = getAuth(app);

export default function Register() {
  useEffect(()=>{ document.title = "ToyTopia - Register"; }, []);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);

  const validatePassword = (pwd) => {
    const hasUpper = /[A-Z]/.test(pwd);
    const hasLower = /[a-z]/.test(pwd);
    const lengthOk = pwd.length >= 6;
    return hasUpper && hasLower && lengthOk;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      toast.error("Password must include uppercase, lowercase and be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      // Update profile with name & photo
      await updateProfile(userCred.user, {
        displayName: name || "",
        photoURL: photoURL || ""
      });
      toast.success("Registration successful");
      navigate("/");
    } catch (err) {
      toast.error(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success("Signed up with Google");
      navigate("/");
    } catch (err) {
      toast.error("Google signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>

      <form onSubmit={handleRegister} className="space-y-3">
        <input className="w-full p-2 border rounded" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} required />
        <input className="w-full p-2 border rounded" placeholder="Photo URL (optional)" value={photoURL} onChange={e=>setPhotoURL(e.target.value)} />
        <input type="email" className="w-full p-2 border rounded" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />

        <div className="relative">
          <input
            className="w-full p-2 border rounded"
            type={showPwd ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            required
          />
          <button type="button" onClick={()=>setShowPwd(s=>!s)} className="absolute right-2 top-2 text-sm">
            {showPwd ? "Hide" : "Show"}
          </button>
        </div>

        <div>
          <p className="text-xs text-gray-600">
            Password must contain uppercase, lowercase and at least 6 characters.
          </p>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full" disabled={loading}>
          {loading ? "Creating..." : "Register"}
        </button>
      </form>

      <div className="mt-3">
        <button onClick={handleGoogle} className="w-full border py-2 rounded">Continue with Google</button>
      </div>

      <p className="text-sm mt-4 text-center">
        Already have an account? <a className="text-blue-600 hover:underline" href="/login">Login</a>
      </p>
    </div>
  );
}
