import React from "react";

const products = [
    {
        id: 1,
        name: "Betta Fish",
        price: "$10",
        image: "https://images.unsplash.com/photo-1544551763-ceddfb631e2d"
    },
    {
        id: 2,
        name: "Gourami",
        price: "$12",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
    },
    {
        id: 3,
        name: "Labyrinth Combo Pack",
        price: "$25",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b"
    }
];

export default function LabyrinthPage() {
    return (
        <div className="min-h-screen bg-[#f5efe6] p-6 text-[#2c2c2c]">
            <h1 className="text-2xl font-semibold mb-6 tracking-wide">Labyrinth Fish</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white/80 backdrop-blur rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden border border-[#e6dccf]"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-4">
                            <h2 className="text-lg font-medium">{product.name}</h2>
                            <p className="text-[#8a7f72] mt-1">{product.price}</p>

                            <button className="mt-4 w-full bg-[#c6a96b] hover:bg-[#b89655] text-white rounded-xl py-2 transition">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
