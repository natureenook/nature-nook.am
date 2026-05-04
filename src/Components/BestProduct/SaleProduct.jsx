import { Link } from "react-router-dom";

const saleItems = [
  { name: "Ակվարիումային ձկների զեղչ", link: "/sale/fish", img: "/images/sale1.png" },
  { name: "Բույսերի հատուկ առաջարկ", link: "/sale/plants", img: "/images/sale2.png" },
  { name: "Թռչունների պարագաների զեղչ", link: "/sale/birds", img: "/images/sale3.png" },
  { name: "Սողունների կերերի հատուկ գին", link: "/sale/reptiles", img: "/images/sale4.png" },
  { name: "Շների ու կատուների խաղալիքներ զեղչով", link: "/sale/pets", img: "/images/sale5.png" },
  { name: "Ակցիաների ամփոփում", link: "/sale/summary", img: "/images/sale6.png" },
];

export default function SaleProduct() {
  return (
    <div className="min-h-screen bg-[#f5f1e6] px-6 py-20">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Ակցիաներ և զեղչեր
        </h1>
        <p className="text-[#555] text-lg">
          Օգտագործիր լավագույն առաջարկները՝ խնայիր ժամանակն ու գումարը
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {saleItems.map((item, index) => (
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