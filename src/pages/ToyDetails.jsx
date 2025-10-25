import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import toysData from "../data/toysData.json";
import { useAuth } from "../hooks/useAuth.js";
import toast from "react-hot-toast";

export default function ToyDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [toy, setToy] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        document.title = `ToyTopia - Toy ${id}`;
        const found = toysData.find(t => String(t.toyId) === String(id));
        setToy(found || null);
    }, [id]);

    if (!toy) return <div className="text-center py-20">Toy not found</div>;

    const handleTryNow = (e) => {
        e.preventDefault();
        if (!user) {
            toast.error("Please login first!");
            return;
        }

        const allToys = JSON.parse(localStorage.getItem("tryNowToys") || "{}");
        const userId = user.uid || user.email;
        const userToys = allToys[userId] || [];

        // Check if toy already added
        if (!userToys.find(t => t.toyId === toy.toyId)) {
            userToys.push(toy);
            allToys[userId] = userToys;
            localStorage.setItem("tryNowToys", JSON.stringify(allToys));
            toast.success("Toy added to your ExtraPage!");
        } else {
            toast("This toy is already in your ExtraPage.");
        }

        // Redirect to ExtraPage
        navigate("/extra");
    };

    return (
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 my-8">
            <div className="md:col-span-1">
                <img src={toy.pictureURL} alt={toy.toyName} className="w-full h-72 object-contain rounded-lg bg-white p-4" />
            </div>

            <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold">{toy.toyName}</h2>
                <p className="text-sm text-gray-600">By {toy.sellerName} • {toy.sellerEmail}</p>

                <div className="mt-3">
                    <p>{toy.description}</p>
                    <div className="mt-3 flex gap-4 items-center">
                        <span className="font-semibold text-lg">${toy.price}</span>
                        <span className="text-sm text-gray-600">Rating: {toy.rating} ⭐</span>
                        <span className="text-sm text-gray-600">In stock: {toy.availableQuantity}</span>
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="font-semibold mb-2">Try Now</h3>
                    <form onSubmit={handleTryNow} className="max-w-md space-y-3">
                        <input name="name" defaultValue={user?.displayName || ""} placeholder="Name" className="w-full p-2 border rounded" required />
                        <input name="email" defaultValue={user?.email || ""} placeholder="Email" className="w-full p-2 border rounded" required />
                        <button className="bg-blue-600 text-white px-4 py-2 rounded">Try Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
