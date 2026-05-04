import { Link } from "react-router-dom";

const bestItems = [
    { name: "Թոփ ապրանքներ", link: "/top", img: "/images/top.png" },
    { name: "Նորություններ", link: "/new", img: "/images/new.png" },
    { name: "Ակցիաներ", link: "/sale", img: "/images/sale.png" },
];

export default function BestItemsPage() {
    return (
        <div className="min-h-screen bg-[#f5f1e6] px-6 py-20">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Լավագույնները
                </h1>
                <p className="text-[#555] text-lg">
                    Ընտրիր բաժինը և տես ամենաարագած լավագույն առաջարկները
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {bestItems.map((item, index) => (
                    <Link
                        to={item.link}
                        key={index}
                        className="group bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                        <div className="p-6 flex flex-col items-center text-center">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-20 h-20 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
                            />

                            <h3 className="text-xl font-semibold mb-2 group-hover:text-[#5d8c73]">
                                {item.name}
                            </h3>

                            <p className="text-sm text-[#666]">
                                Սեղմիր և տես ամբողջ բաժինը
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}