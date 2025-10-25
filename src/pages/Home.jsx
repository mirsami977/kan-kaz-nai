import React, { useEffect, useState } from "react";
import Slider from "../components/Slider.jsx";
import ToyCard from "../components/ToyCard.jsx";
import toysData from "../data/toysData.json";

export default function Home() {
<<<<<<< HEAD
    const [toys, setToys] = useState([]);

    useEffect(() => {
        setToys(toysData);
        document.title = "Home | ToyTopia";
    }, []);

    return (
        <div>
            <Slider />

            <section className="max-w-6xl mx-auto px-4 my-10">
                <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
                    Popular Toys
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {toys.map((toy) => (
                        <ToyCard key={toy.toyId} toy={toy} />
                    ))}
                </div>
            </section>

            {/* Extra Section Example */}
            <section className="bg-yellow-100 py-10 mt-10 text-center">
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                    Explore Local Sellers 🏪
                </h3>
                <p className="max-w-xl mx-auto text-gray-700">
                    Support your neighborhood toy sellers and discover unique, handmade,
                    and sustainable toys for your kids.
                </p>
            </section>
        </div>
    );
=======
  const [toys, setToys] = useState([]);

  useEffect(() => {
    setToys(toysData);
    document.title = "Home | ToyTopia";
  }, []);

  return (
    <div>
      <Slider />

      <section className="max-w-6xl mx-auto px-4 my-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Popular Toys
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {toys.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy} />
          ))}
        </div>
      </section>

      {/* Extra Section Example */}
      <section className=" py-10 mt-10 text-center bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
        <h3 className="text-3xl font-bold text-blue-700 mb-3">
          Explore Local Sellers 🏪
        </h3>
        <p className="max-w-xl mx-auto text-gray-700 font-bold">
          Support your neighborhood toy sellers and discover unique, handmade,
          and sustainable toys for your kids. Celebrate the creativity of local
          artisans, where every toy tells a story of love and craftsmanship..
        </p>
      </section>
    </div>
  );
>>>>>>> 44ba30f ( Meaningful Message)
}
