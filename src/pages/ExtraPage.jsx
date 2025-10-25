import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth.js";
import toast from "react-hot-toast";

export default function ExtraPage() {
    const { user } = useAuth();
    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        if (!user) return;
        const allToys = JSON.parse(localStorage.getItem("tryNowToys") || "{}");
        const userId = user.uid || user.email;
        setMyToys(allToys[userId] || []);
    }, [user]);

    const handleRemove = (toyId) => {
        if (!user) return;
        const allToys = JSON.parse(localStorage.getItem("tryNowToys") || "{}");
        const userId = user.uid || user.email;
        const updatedToys = (allToys[userId] || []).filter(t => t.toyId !== toyId);
        allToys[userId] = updatedToys;
        localStorage.setItem("tryNowToys", JSON.stringify(allToys));
        setMyToys(updatedToys);
        toast.success("Toy removed successfully!");
    };

    if (!user) return <div className="text-center py-20">Please login to see your toys.</div>;
    if (myToys.length === 0) return <div className="text-center py-20">No toys added yet.</div>;

    return (
        <div className="max-w-5xl mx-auto my-8 grid md:grid-cols-3 gap-6">
            {myToys.map((toy) => (
                <div key={toy.toyId} className="bg-white p-4 rounded-lg shadow relative">
                    <img src={toy.pictureURL} alt={toy.toyName} className="w-full h-48 object-contain rounded" />
                    <h3 className="font-bold text-lg mt-2">{toy.toyName}</h3>
                    <p className="text-sm text-gray-600">{toy.subCategory}</p>
                    <p className="text-sm text-gray-800 mt-1">${toy.price}</p>
                    <button
                        onClick={() => handleRemove(toy.toyId)}
                        className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                        &times;
                    </button>
                </div>
            ))}
        </div>
    );
}
