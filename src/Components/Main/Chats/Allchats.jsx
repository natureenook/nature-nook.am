import { useState } from "react";

export default function Allchats() {

    const cards = [
        {
            title: "Բյուրեղային ակվարիում",
            text: "Ակվարիումի ջուրը պետք է լինի մաքուր և հավասարակշռված, որպեսզի ձկները լինեն առողջ և ակտիվ։",
            img: "/img/fish1.jpg",
        },
        {
            title: "Ձկների գունային լույս",
            text: "Լույսը օգնում է ձկներին ցուցադրել իրենց բնական գեղեցկությունը և ապահովում է բույսերի աճը։",
            img: "/img/fish2.jpg",
        },
        {
            title: "Քաղցրահամ ջրի աշխարհ",
            text: "Բազմաթիվ տեսակներ ապրում են քաղցրահամ ջրում՝ ստեղծելով հետաքրքիր և գունավոր միջավայր։",
            img: "/img/fish3.jpg",
        },
        {
            title: "Խելացի ակվարիում",
            text: "Ժամանակակից ակվարիումները ունեն ավտոմատ ջրի մոնիտորինգ և խելացի կառավարման համակարգ։",
            img: "/img/fish4.jpg",
        },
        {
            title: "Բնական ակվասկեյփ",
            text: "Բույսերով և քարերով ստեղծվում է բնական միջավայր, որը շատ գեղեցիկ է թվում ակվարիումում։",
            img: "/img/fish5.jpg",
        },
        {
            title: "Հիասքանչ բետտա",
            text: "Բետտա ձկները հայտնի են իրենց վառ գույներով և երկար լողակներով։",
            img: "/img/fish6.jpg",
        },
    ];

    return (
        <section className="bg-gray-100 py-16">

            <h2 className="text-center text-2xl font-semibold mb-12">
                Ընտրված հոդվածներ
            </h2>

            <div className="max-w-7xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-10 px-6">

                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                    >

                        {/* Image */}
                        <div className="overflow-hidden">
                            <img
                                src={card.img}
                                alt=""
                                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6 text-center">

                            <h3 className="text-lg font-semibold mb-3">
                                {card.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {card.text}
                            </p>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}