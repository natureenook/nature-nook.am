import { Link } from "react-router-dom";

const newsItems = [
  { name: "Նոր բույսերի տեսականի", link: "/new/plants", img: "/images/news1.png" },
  { name: "Ակվարիումային տեխնիկա 2026", link: "/new/aquarium-tech", img: "/images/news2.png" },
  { name: "Թռչունների խնամքի նոր ուղեցույց", link: "/new/bird-care", img: "/images/news3.png" },
  { name: "Սողունների նոր կերերի լիցք", link: "/new/reptile-food", img: "/images/news4.png" },
  { name: "Շների և կատուների համար նոր խաղալիքներ", link: "/new/pets-toys", img: "/images/news5.png" },
  { name: "Ակցիաների ամփոփում", link: "/new/sales-summary", img: "/images/news6.png" },
];

export default function NewProduct() {
  return (
    <div className="min-h-screen bg-[#f5f1e6] px-6 py-20">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Նորություններ
        </h1>
        <p className="text-[#555] text-lg">
          Ստացիր ամենավերջին թարմացումները մեր ապրանքների ու խնամքի ոլորտից
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {newsItems.map((item, index) => (
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
                Սեղմիր և կարդա մանրամասները
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}