import { useState, useEffect } from "react";

export default function FishCarousel() {

    const images = [
        "public/Caruselle1.png",
        "public/Caruselle2.png",
        "public/Caruselle3.png",
        "public/Caruselle4.png",
    ];

    const [index, setIndex] = useState(0);
    const [pause, setPause] = useState(false);

    // Auto slide
    useEffect(() => {
        if (pause) return;

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [pause]);

    const next = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prev = () => {
        setIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    return (
        <div
            className="w-full bg-gradient-to-br from-green-200 via-green-100 toxt-white py-14 "
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
        >

            <h2 className="text-2xl font-semibold text-center mb-8">
                Լավագույն քաղցրահամ ջրի տեսակները
            </h2>

            <div className="relative max-w-6xl mx-auto overflow-hidden">

                {/* Slider */}
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${index * 100}%)`,
                    }}
                >
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className="min-w-full flex justify-center"
                        >
                            <img
                                src={img}
                                alt=""
                                className="w-[800px] h-[420px] object-cover rounded-xl shadow-2xl"
                            />
                        </div>
                    ))}
                </div>

                {/* Left Arrow */}
                <button
                    onClick={prev}
                    className="absolute left-5 top-1/2 -translate-y-1/2 bg-white hover:bg-green-200 px-4 py-2 rounded-full text-2xl cursor-pointer"
                >
                    ❮
                </button>

                {/* Right Arrow */}
                <button
                    onClick={next}
                    className="absolute right-5 top-1/2 -translate-y-1/2 bg-white hover:bg-green-200 px-4 py-2 rounded-full text-2xl cursor-pointer"
                >
                    ❯
                </button>

            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-6">
                {images.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full cursor-pointer transition ${i === index
                            ? "bg-red-500 scale-125"
                            : "bg-gray-400"
                            }`}
                    ></div>
                ))}
            </div>

        </div>
    );
} 