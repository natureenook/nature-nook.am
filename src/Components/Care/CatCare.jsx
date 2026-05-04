import { useState } from "react";

export default function CatCare() {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-[#f5f1e6] text-[#2d2d2d]">
            {/* HERO */}
            <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Կատուների խնամք՝ պարզ, ճիշտ, առանց սխալների
                </h1>
                <p className="text-lg md:text-xl text-[#555] mb-8 max-w-2xl">
                    Սովորիր պահել առողջ և երջանիկ կատու՝ առանց ավելորդ գլխացավի
                </p>
                <div className="flex gap-4">
                    <button className="px-6 py-3 bg-[#c2a878] text-white rounded-2xl">
                        Սկսել հիմա
                    </button>
                    <button
                        onClick={() => setOpen(true)}
                        className="px-6 py-3 border border-[#c2a878] text-[#c2a878] rounded-2xl"
                    >
                        Իմանալ ավելին
                    </button>
                </div>
            </section>

            {/* FEATURES */}
            <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-2xl shadow">
                    <h3 className="text-xl font-semibold mb-3">Սկսնակների համար</h3>
                    <p className="text-[#555]">
                        Ինչպես ճիշտ սկսել կատվի խնամքը՝ առողջություն և հարմարավետություն ապահովելու համար
                    </p>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow">
                    <h3 className="text-xl font-semibold mb-3">Խնամքի կանոններ</h3>
                    <p className="text-[#555]">
                        Սնունդ, վարժանք, հիգիենա՝ ամենակարևոր քայլերը կատվի համար
                    </p>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow">
                    <h3 className="text-xl font-semibold mb-3">Խնդիրների լուծում</h3>
                    <p className="text-[#555]">
                        Հիվանդություն, վարք, մազափոշի — արագ և արդյունավետ լուծումներ
                    </p>
                </div>
            </section>

            {/* WHY US */}
            <section className="py-16 bg-[#ebe3d3] text-center px-6">
                <h2 className="text-3xl font-bold mb-8">Ինչու Nature Nook</h2>
                <div className="max-w-3xl mx-auto space-y-4 text-[#444]">
                    <p>✔️ Պարզ և հասկանալի ուղեցույցներ</p>
                    <p>✔️ Իրական փորձ, ոչ տեսական խոսք</p>
                    <p>✔️ Խնայող լուծումներ՝ առանց ավելորդ գնումների</p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center px-6">
                <h2 className="text-3xl font-bold mb-6">
                    Սկսիր քո կատվի ճիշտ խնամքը այսօր
                </h2>
                <button className="px-8 py-4 bg-[#c2a878] text-white rounded-2xl text-lg">
                    Սկսել
                </button>
            </section>

            {/* MODAL */}
            {open && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4">
                    <div className="bg-white rounded-2xl p-8 max-w-lg w-full text-left">
                        <h3 className="text-2xl font-bold mb-4">Մանրամասն</h3>
                        <p className="text-[#555] mb-6">
                            Այս ուղեցույցով դու կսովորես՝ ինչպես ճիշտ կերակրել, վարժեցնել և խնամել կատուն՝ առողջ ու երջանիկ պահելու համար։
                        </p>
                        <button
                            onClick={() => setOpen(false)}
                            className="px-6 py-3 bg-[#c2a878] text-white rounded-xl"
                        >
                            Փակել
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}