import { Link } from "react-router-dom";

export default function ShopPage() {
    const shopOptions = [
        {
            name: "Գնել",
            description: "Գտիր լավագույն ապրանքները ձկների, բույսերի և կենդանիների համար անմիջապես Nature Nook-ից։",
            link: "/buy",
            img: "/images/shop-buy.png",
        },
        {
            name: "Վաճառել",
            description: "Վաճառիր քո ապրանքները արագ և վստահելի՝ հասանելի մեր ամբողջ օգտատերերին։",
            link: "/sell",
            img: "/images/shop-sell.png",
        },
    ];

    return (
        <div className="min-h-screen bg-[#f5f1e6] px-6 py-20">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Առցանց խանութ
                </h1>
                <p className="text-[#555] text-lg">
                    Ընտրիր քո գործողությունը և սկսել անմիջապես Nature Nook-ում
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {shopOptions.map((option, index) => (
                    <Link
                        to={option.link}
                        key={index}
                        className="group bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                        <div className="p-6 flex flex-col items-center text-center">
                            <img
                                src={option.img}
                                alt={option.name}
                                className="w-28 h-28 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
                            />
                            <h3 className="text-2xl font-semibold mb-2 group-hover:text-[#5d8c73]">
                                {option.name}
                            </h3>
                            <p className="text-sm text-[#666]">{option.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}