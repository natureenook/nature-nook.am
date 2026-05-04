import React from "react";

const DogAndCatExp = () => {
  return (
    <section className="w-full  bg-gradient-to-br from-green-200 via-green-100 to-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="flex gap-4 bg-white/10 p-4 rounded-3xl backdrop-blur-md">
          <img
            src="public/experiment (2).jpg"
            alt="dog"
            className="w-1/2 rounded-2xl object-cover"
          />
          <img
            src="public/experiment (1).jpg"
            alt="cat"
            className="w-1/2 rounded-2xl object-cover"
          />
        </div>

        {/* Right - Text */}
        <div className="text-black">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Սոցիալական փորձ՝ <br />
            հատուկ բնության <br />
            ընկերների համար 🐾
          </h1>

          <p className="text-black/80 mb-6 text-sm md:text-base">
            Շուտով Nature Nook-ում կարող եք գտնել ամեն ինչ՝ ձեր սիրելի
            կենդանիների և բույսերի համար։ Սա պարզապես խանութ չէ —
            համայնք է։
          </p>

          <ul className="space-y-3 mb-8 text-sm md:text-base">
            <li>🐶 Շների խնամք</li>
            <li>🐱 Կատուների խնամք</li>
            <li>📸 Իրական նկարներ</li>
            <li>💖 Անվտանգ գնումներ</li>
            <li>🌱 Բույսեր և աքսեսուարներ</li>
          </ul>

          <button className="bg-white text-[#5d8c73] px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            🚧 Շուտով մեկնարկում է
          </button>
        </div>
      </div>
    </section>
  );
};

export default DogAndCatExp;