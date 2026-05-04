import { Link } from "react-router-dom";

const careItems = [
    { name: "Ձկներ", link: "/fishcare", img: "public/submenufish.png" },
    { name: "Բույսեր", link: "/plantcare", img: "public/submenuplant.png" },
    { name: "Թռչյուններ", link: "/birdcare", img: "/images/bird.png" },
    { name: "Սողուններ", link: "/reptilescare", img: "/images/reptile.png" },
       { name: "Շուն", link: "/dogcare", img: "/images/reptile.png" },
          { name: "Կատու", link: "/catcare", img: "/images/reptile.png" },
];

export default function CarePage() {
    return (
        <div className="h-182 bg-[#f5f1e6] px-6 py-20">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Խնամքի ուղեցույցներ
                </h1>
                <p className="text-[#555] text-lg">
                    Ընտրիր բաժինը և սովորիր ճիշտ խնամք
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {careItems.map((item, index) => (
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
                                Սեղմիր և տես ամբողջ խնամքի գայդը
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
