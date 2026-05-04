import { useState } from "react";

export default function SellPage() {
    const [openGuidelines, setOpenGuidelines] = useState(true);

    return (
        <div className="min-h-screen bg-[#f5f1e6] px-6 py-20">

            {/* HERO */}
            <section className="text-center mb-16 max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Վաճառք Nature Nook-ում
                </h1>
                <p className="text-[#555] text-lg">
                    Նախքան սկսելը ծանոթացեք կանոններին և խորհուրդներին, որպեսզի վաճառքն առավել արդյունավետ լինի։
                </p>
            </section>

            {/* GUIDELINES */}
            {openGuidelines && (
                <section className="max-w-4xl mx-auto mb-16 p-6 bg-white rounded-2xl shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Վաճառքի կանոններ և խորհուրդներ</h2>
                    <ul className="list-disc list-inside text-[#555] space-y-2">
                        <li>Նկարագրեք ապրանքը ճիշտ և մանրամասն՝ տեսքով և վիճակով։</li>
                        <li>Բացատրեք ինչքան տարեկան է, որ տեսակի է և ինչ խնամք է պահանջում (եթե կենդանի է)։</li>
                        <li>Նշեք իրական գինը և ցանկացած առաքման ծախս։</li>
                        <li>Հաճախորդին տրամադրեք ուղիղ հաղորդակցման միջոց։</li>
                        <li>Խուսափեք անորոշ հայտարարություններից՝ օգտագործեք հստակ բառեր և նկարներ։</li>
                    </ul>
                    <div className="mt-6 text-center">
                        <button
                            onClick={() => setOpenGuidelines(false)}
                            className="px-6 py-3 bg-[#c2a878] text-white rounded-2xl hover:bg-[#a88d5e] transition"
                        >
                            Հասնել վաճառքի ձևին
                        </button>
                    </div>
                </section>
            )}

            {/* SELL FORM */}
            {!openGuidelines && (
                <section className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Ավելացնել ապրանքը վաճառքի</h2>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-[#555] mb-1">Ապրանքի անուն</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-lg p-2"
                                placeholder="Օրինակ՝ Կարմիր բարբուս"
                            />
                        </div>

                        <div>
                            <label className="block text-[#555] mb-1">Կատեգորիա</label>
                            <select className="w-full border border-gray-300 rounded-lg p-2">
                                <option>Ձուկ</option>
                                <option>Բույս</option>
                                <option>Կենդանի</option>
                                <option>Թռչուն</option>
                                <option>Սողուն</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-[#555] mb-1">Նկարագրություն</label>
                            <textarea
                                className="w-full border border-gray-300 rounded-lg p-2"
                                placeholder="Նշեք տարիքը, խնամքը, վիճակը և այլ կարևոր տեղեկություններ"
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-[#555] mb-1">Գին</label>
                            <input
                                type="number"
                                className="w-full border border-gray-300 rounded-lg p-2"
                                placeholder="Օրինակ՝ 5000 ֏"
                            />
                        </div>

                        <div>
                            <label className="block text-[#555] mb-1">Նկարներ</label>
                            <input type="file" multiple className="w-full" />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-[#c2a878] text-white rounded-2xl hover:bg-[#a88d5e] transition"
                        >
                            Վաճառել հիմա
                        </button>
                    </form>
                </section>
            )}
        </div>
    );
}