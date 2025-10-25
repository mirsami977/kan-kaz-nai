import React, { useEffect, useState } from "react";
import { sendPasswordResetEmail, getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config.js";
import { useLocation } from "react-router";
import toast from "react-hot-toast";

const auth = getAuth(app);

export default function ForgotPassword() {
  useEffect(() => {
    document.title = "ToyTopia - Reset Password";
  }, []);

  const location = useLocation();
  // If navigated from login with state.email, prefill
  const prefillEmail = location.state?.email || "";

  const [email, setEmail] = useState(prefillEmail);
  const [sending, setSending] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Reset email sent. Check your inbox (Gmail).");
      // open Gmail in new tab to guide examiner (best-effort)
      window.open("https://mail.patha.com", "_blank");
    } catch (err) {
      toast.error(err.message || "Reset failed");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
      <form onSubmit={handleReset} className="space-y-3">
        <input
          className="w-full p-2 border rounded"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          disabled={sending}
        >
          {sending ? "Sendings..........." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
}
