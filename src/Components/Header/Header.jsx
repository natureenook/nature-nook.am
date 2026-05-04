import { ShoppingCart, Bell, Mail } from "lucide-react";
import SearchBar from "./Searchbar";
import { Link } from "react-router-dom";

export default function Header() {
    const menuItems = [
        {
            name: "Ցանկ",
            mega: true,
            categories: [
                {
                    title: "Ձկներ",
                    image: "/submenufish.png",
                    items: [
                        { name: "Լաբիրինթոսային", link: "/fish/labyrinth" },
                        { name: "Ցիխլիդներ", link: "/fish/cichlids" },
                        { name: "Բարբուսներ", link: "/fish/barbus" },
                        { name: "Դանիո", link: "/fish/danio" },
                        { name: "Դիսկուսներ", link: "/fish/discus" },
                        { name: "Կենդանածիններ", link: "/fish/livebearers" },
                    ],
                },
                {
                    title: "Բույսեր",
                    image: "/submenuplant.png",
                    items: [
                        { name: "Մոսեր", link: "/plants/moss" },
                        { name: "Պապորոտներ", link: "/plants/ferns" },
                        { name: "Լողացող բույսեր", link: "/plants/floating" },
                        { name: "Հողածածկ բույսեր", link: "/plants/carpet" },
                        { name: "Անուբիաս", link: "/plants/anubias" },
                        { name: "Նիմֆեա", link: "/plants/nymphaea" },
                    ],
                },
                {
                    title: "Տեռարիում",
                    image: "/images/terra.png",
                    items: [
                        { name: "Սինգոնիում", link: "/terra/syngonium" },
                        { name: "Սպատիֆիլում", link: "/terra/spathiphyllum" },
                        { name: "Օֆիոպոգոն", link: "/terra/ophiopogon" },
                        { name: "Հեմիգրաֆիս", link: "/terra/hemigraphis" },
                    ],
                },
                {
                    title: "Կենդանիներ",
                    image: "/images/animal.png",
                    items: [
                        { name: "Աքսոլոտլ", link: "/animals/axolotl" },
                        { name: "Տրիտոն", link: "/animals/newt" },
                        { name: "Գորտեր", link: "/animals/frogs" },
                    ],
                },
            ],
        },
        {
            name: "Առցանց խանութ",
            link: "/shop",
            submenu: [
                { name: "Գնել", link: "/buy" },
                { name: "Վաճառել", link: "/sell" },
            ],
        },
        {
            name: "Լավագույններ",
            link: "/best",
            submenu: [
                { name: "Թոփ ապրանքներ", link: "/top" },
                { name: "Նորություններ", link: "/new" },
                { name: "Ակցիաներ", link: "/sale" },
            ],
        },
        {
            name: "Խնամք",
            link: "/care",
            submenu: [
                { name: "Ձկներ", link: "/fishcare" },
                { name: "Բույսեր", link: "/plantcare" },
                { name: "Թռչյուններ", link: "/birdcare" },
                { name: "Սողուններ", link: "/reptilescare" },
                { name: "Շուն", link: "/dogcare" },
                { name: "Կատու", link: "/catcare" },
            ],
        },
        {
            name: "Հոդվածներ",
            submenu: [
                { name: "Գրավոր", link: "/blog" },
                { name: "Վիդեո", link: "/videos" },
            ],
        },
        {
            name: "Ավելին",
            submenu: [
                { name: "Մեր մասին", link: "/about" },
                { name: "Կապ", link: "/contact" },
            ],
        },
    ];

    return (
        <header className="fixed top-0 left-0 w-full h-[70px] flex items-center z-50 backdrop-blur-md bg-black/40 text-white">
            <div className="max-w-7xl mx-auto px-6 flex items-center w-full">

                <div className="flex items-center flex-shrink-0">
                    <Link to="/">
                        <img
                            src="/logo.png"
                            alt="Nature Nook"
                            className="w-14 h-14 object-contain cursor-pointer"
                        />
                    </Link>
                </div>

                <nav className="hidden md:flex flex-1 justify-center items-center gap-6 text-sm font-medium relative">
                    {menuItems.map((item, idx) => (
                        <div key={idx} className="relative group">

                            {item.link ? (
                                <Link
                                    to={item.link}
                                    className="flex items-center gap-1 cursor-pointer hover:text-[#5d8c73]"
                                >
                                    {item.name}
                                    {(item.submenu || item.mega) && <span className="text-xs">▾</span>}
                                </Link>
                            ) : (
                                <span className="flex items-center gap-1 cursor-pointer hover:text-[#5d8c73]">
                                    {item.name}
                                    {(item.submenu || item.mega) && <span className="text-xs">▾</span>}
                                </span>
                            )}

                            {item.mega ? (
                                <div className="absolute left-111 -translate-x-1/2 top-full mt-6 w-[900px] bg-black/60 rounded-xl shadow-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div className="grid grid-cols-4 gap-8">
                                        {item.categories.map((cat, i) => (
                                            <div key={i}>
                                                <div className="mb-6">
                                                    <img
                                                        src={cat.image}
                                                        alt={cat.title}
                                                        className="w-10 h-10 mb-2 object-contain"
                                                    />
                                                    <h4 className="font-semibold text-[#5d8c73]">
                                                        {cat.title}
                                                    </h4>
                                                </div>

                                                {cat.items.map((sub, j) => (
                                                    <Link
                                                        key={j}
                                                        to={sub.link}
                                                        className="block text-sm py-1 hover:text-[#5d8c73]"
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : item.submenu ? (
                                <div className="absolute top-full left-0 mt-2 bg-black/60 rounded-md shadow-lg min-w-[150px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    {item.submenu.map((sub, subIdx) => (
                                        <Link
                                            key={subIdx}
                                            to={sub.link}
                                            className="block px-4 py-2 text-sm hover:bg-[#5d8c73] hover:text-black"
                                        >
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    ))}
                </nav>

                <div className="flex items-center gap-4 flex-shrink-0">

                    <div className="hidden md:flex items-center gap-4 text-gray-300">
                        <div className="relative w-64">
                            <SearchBar />
                        </div>

                        <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-white" />
                        <Bell className="w-5 h-5 cursor-pointer hover:text-white" />
                        <Mail className="w-5 h-5 cursor-pointer hover:text-white" />
                    </div>

                    <Link to="/login" className="border border-gray-400 px-4 py-2 rounded-lg text-sm hover:bg-[#5d8c73] hover:text-black transition">
                        Մուտք
                    </Link>
                </div>
            </div>
        </header>
    );
}
