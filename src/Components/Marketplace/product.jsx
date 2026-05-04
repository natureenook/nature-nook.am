import { useState } from "react";

const products = [
    { name: "Կարմիր բարբուս", type: "Ձուկ", price: 5000, size: "Փոքր", img: "/images/fish1.png" },
    { name: "Նիմֆեա", type: "Բույս", price: 8000, size: "Միջին", img: "/images/plant1.png" },
    { name: "Ալբինո տրիտոն", type: "Կենդանի", price: 12000, size: "Փոքր", img: "/images/animal1.png" },
    { name: "Կանաչ թութակ", type: "Թռչուն", price: 35000, size: "Մեծ", img: "/images/bird1.png" },
    { name: "Կանաչ մոսեր", type: "Բույս", price: 3000, size: "Փոքր", img: "/images/plant2.png" },
    { name: "Աքսոլոտլ", type: "Կենդանի", price: 15000, size: "Միջին", img: "/images/animal2.png" },
    { name: "Դանիո", type: "Ձուկ", price: 4000, size: "Փոքր", img: "/images/fish2.png" },
    { name: "Կանաչ խոյակ", type: "Սողուն", price: 7000, size: "Միջին", img: "/images/reptile1.png" },
    { name: "Կարմիր դիսկուս", type: "Ձուկ", price: 12000, size: "Միջին", img: "/images/fish3.png" },
    { name: "Սպատիֆիլում", type: "Բույս", price: 9000, size: "Մեծ", img: "/images/plant3.png" },
];

export default function BuyPage() {
    const [filterType, setFilterType] = useState("Բոլորը");
    const [filterPrice, setFilterPrice] = useState("Բոլորը");
    const [filterSize, setFilterSize] = useState("Բոլորը");

    const filteredProducts = products.filter((p) => {
        const typeMatch = filterType === "Բոլորը" || p.type === filterType;
        const priceMatch =
            filterPrice === "Բոլորը" ||
            (filterPrice === "<10000" && p.price < 10000) ||
            (filterPrice === "10000-20000" && p.price >= 10000 && p.price <= 20000) ||
            (filterPrice === ">20000" && p.price > 20000);
        const sizeMatch = filterSize === "Բոլորը" || p.size === filterSize;
        return typeMatch && priceMatch && sizeMatch;
    });

    return (
        <div className="min-h-screen bg-[#f5f1e6] px-6 py-20">

            {/* FILTERS */}
            <section className="max-w-6xl mx-auto mb-8 flex flex-wrap gap-4 justify-center">
                <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2"
                >
                    <option>Բոլորը</option>
                    <option>Ձուկ</option>
                    <option>Բույս</option>
                    <option>Կենդանի</option>
                    <option>Թռչուն</option>
                    <option>Սողուն</option>
                </select>

                <select
                    value={filterPrice}
                    onChange={(e) => setFilterPrice(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2"
                >
                    <option>Բոլորը</option>
                    <option value="<10000">Առանց 10000</option>
                    <option value="10000-20000">10000-20000</option>
                    <option value=">20000">Ավելի քան 20000</option>
                </select>

                <select
                    value={filterSize}
                    onChange={(e) => setFilterSize(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2"
                >
                    <option>Բոլորը</option>
                    <option>Փոքր</option>
                    <option>Միջին</option>
                    <option>Մեծ</option>
                </select>
            </section>

            {/* PRODUCTS GRID */}
            <section className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredProducts.map((p, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                        <img
                            src={p.img}
                            alt={p.name}
                            className="w-full h-40 object-contain bg-[#f0f0f0]"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                            <p className="text-[#555]">{p.type}</p>
                            <p className="text-[#2d2d2d] font-bold">{p.price} ֏</p>
                            <p className="text-[#777]">{p.size}</p>
                            <button className="mt-4 w-full py-2 bg-[#c2a878] text-white rounded-xl hover:bg-[#a88d5e] transition">
                                Գնել
                            </button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}