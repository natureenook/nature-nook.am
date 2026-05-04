import { useEffect, useState } from "react";

export default function Hero() {
    const texts = [
        // Ակվարիում
        "Ակվարիումի սիրահարների հարթակ",
        "Գտիր քո սիրելի ձկների տեսակները",
        "Կիսվիր փորձով և գիտելիքով",
        "Թարմացրու քո ջրային աշխարհը",

        // Բույսեր
        "Բույսերի աշխարհը քո տանը",
        "Գտիր թարմ ու եզակի բույսեր",
        "Կենսական սեր ու կանաչություն տան մեջ",
        "Անհատականացված բույսեր՝ քո սթայլով",

        // Ձկներ
        "Ձկների համար անվտանգ բնակավայր",
        "Գտիր հազվադեպ տեսակներ",
        "Ջրաշխարհի գեղեցկությունը քո աչքերի առաջ",
        "Ապահով առողջ ձկների մատակարարում",

        // Կենդանիներ
        "Փոքր ընկերներ, մեծ սեր",
        "Կենդանիների համար հոգատարություն ու որակ",
        "Գտիր քո նոր ընտանի կենդանուն",

        // Աքսեսուարներ
        "Աքսեսուարներ, որոնք վերածում են տանը ակվարիումային օազիս",
        "Դեֆինացնող փոքր տարրեր քո ջրաշխարհում",
        "Ֆունկցիոնալ և գեղեցիկ լուծումներ ամեն տեսակի ակվարիումի համար",

        // Դեղեր
        "Ապահով ջրաշխարհի խնամք",
        "Ձկների և բույսերի առողջության համար դեղեր",
        "Բնական խնամք՝ առանց ռիսկի",

        // Պարարտանյութեր
        "Բույսերի աճի համար արդյունավետ պարարտանյութեր",
        "Նյութերի ճիշտ հավասարակշռություն՝ ամուր աճի համար",
        "Կենսական վիտամիններ և միկրոտարրեր",

        // Ընդհանուր
        "Համատեղիր գեղեցկությունն ու ֆունկցիոնալությունը",
        "Nature Nook-ը՝ քո անձնական էկոհամակարգը"
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[729px] overflow-hidden">

            <video
                src="public/Video/Hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white">

                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Քո Սրտի Փոքրիկ Անկյունը 🌿
                </h1>

                <h2 className="text-xl md:text-2xl mb-6 transition-all duration-500">
                    {texts[index]}
                </h2>
            </div>
        </div>
    );
}