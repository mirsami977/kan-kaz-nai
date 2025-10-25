import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth.js";
import { updateProfile, getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config.js";
import toast from "react-hot-toast";

const auth = getAuth(app);

export default function Profile() {
  const { user, loading } = useAuth();
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    document.title = "ToyTopia - Profile";
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (!user) return <div className="text-center py-20">Please login to view profile</div>;

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await updateProfile(auth.currentUser, { displayName: name, photoURL });
      toast.success(" Profile updated successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Update failed!");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">My Profile</h2>

      <div className="flex flex-col items-center gap-3 mb-4">
        {/* Live preview of the photo */}
        <img
          src={
            photoURL
              ? photoURL
              : user?.photoURL
              ? user.photoURL
              : "https://via.placeholder.com/100?text=Avatar"
          }
          alt="avatar"
          className="w-24 h-24 rounded-full object-cover border-2 border-blue-400 shadow-sm"
        />
        <div className="text-center">
          <div className="font-semibold">{user.displayName || user.email}</div>
          <div className="text-sm text-gray-600">{user.email}</div>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">Name</label>
          <input
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">Photo URL</label>
          <input
            className="w-full p-2 border rounded"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Paste image URL"
          />
          <p className="text-xs text-gray-500 mt-1"> Type or paste an image link to see live preview above.</p>
        </div>

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full transition"
          disabled={saving}
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
