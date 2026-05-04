import { Link } from "react-router-dom";

const topProducts = [
  { name: "Aqua Cleaner", link: "/top/aqua-cleaner", img: "/images/product1.png" },
  { name: "Plant Fertilizer", link: "/top/plant-fertilizer", img: "/images/product2.png" },
  { name: "Bird Cage XL", link: "/top/bird-cage-xl", img: "/images/product3.png" },
  { name: "Reptile Lamp", link: "/top/reptile-lamp", img: "/images/product4.png" },
  { name: "Dog Toy Pack", link: "/top/dog-toy-pack", img: "/images/product5.png" },
  { name: "Cat Scratcher", link: "/top/cat-scratcher", img: "/images/product6.png" },
];

export default function TopProduct() {
  return (
    <div className="min-h-screen bg-[#f5f1e6] px-6 py-20">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Թոփ ապրանքներ
        </h1>
        <p className="text-[#555] text-lg">
          Նայիր ամենահանրաճանաչ և լավագույն վաճառվող ապրանքներին
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {topProducts.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="group bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="p-6 flex flex-col items-center text-center">
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
              />

              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#5d8c73]">
                {item.name}
              </h3>

              <p className="text-sm text-[#666]">
                Սեղմիր և տես մանրամասները
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}