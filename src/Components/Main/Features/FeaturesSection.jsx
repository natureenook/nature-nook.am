import React from "react";
import { Leaf, PawPrint, ShieldCheck, Camera } from "lucide-react";

const FeaturesSection = () => {
    return (
        <section className="w-full py-20 px-6 md:px-16 bg-[#f6f1e9]">
            <div className="max-w-6xl mx-auto text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-[#3e2c23]">
                    Ինչու՞ ընտրել Nature Nook-ը
                </h2>
                <p className="text-[#7a6a5f] mt-3">
                    Մենք պարզապես խանութ չենք — մենք ստեղծում ենք վստահելի միջավայր
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

                {/* Card 1 */}
                <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-[#e8dfd4] p-3 rounded-xl">
                            <PawPrint className="text-[#6b4f3a]" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#3e2c23]">
                            Կենդանիների խնամք
                        </h3>
                    </div>

                    <p className="text-[#6f5f55] text-sm leading-relaxed">
                        Միայն ստուգված ապրանքներ շների և կատուների համար։
                        Ոչ մի random բան — միայն quality։
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-[#e8dfd4] p-3 rounded-xl">
                            <Leaf className="text-[#6b4f3a]" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#3e2c23]">
                            Բույսեր և բնական միջավայր
                        </h3>
                    </div>

                    <p className="text-[#6f5f55] text-sm leading-relaxed">
                        Բույսեր, պարարտանյութեր և ամեն ինչ՝ քո փոքր բնությունը
                        ստեղծելու համար։
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-[#e8dfd4] p-3 rounded-xl">
                            <ShieldCheck className="text-[#6b4f3a]" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#3e2c23]">
                            Վստահելի գնումներ
                        </h3>
                    </div>

                    <p className="text-[#6f5f55] text-sm leading-relaxed">
                        Անվտանգ վճարումներ և վստահելի վաճառողներ։
                        Ոչ մի ռիսկ — միայն վստահություն։
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-[#e8dfd4] p-3 rounded-xl">
                            <Camera className="text-[#6b4f3a]" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#3e2c23]">
                            Իրական նկարներ
                        </h3>
                    </div>

                    <p className="text-[#6f5f55] text-sm leading-relaxed">
                        Ապրանքների իրական պատկերներ — տեսնում ես այն, ինչ ստանում ես։
                    </p>
                </div>

            </div>
        </section>
    );
};

export default FeaturesSection;