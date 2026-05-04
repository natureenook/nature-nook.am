// src/pages/LoginForm.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function LoginForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        // Անուն validation (մեծատառ/փոքրատառ միայն)
        if (!name) {
            newErrors.name = "Խնդրում ենք ներմուծել անունը";
        } else if (!/^[Ա-Ֆա-ֆA-Za-z\s'-]+$/.test(name)) {
            newErrors.name = "Անունը պետք է պարունակի միայն տառեր";
        }

        // Email validation
        if (!email) {
            newErrors.email = "Խնդրում ենք ներմուծել էլ․ փոստը";
        } else if (
            !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
        ) {
            newErrors.email = "Անվավեր էլ․ փոստի ֆորմատ";
        }

        // Password validation
        if (!password) {
            newErrors.password = "Խնդրում ենք ներմուծել գաղտնաբառը";
        } else if (password.length < 6) {
            newErrors.password = "Գաղտնաբառը պետք է լինի առնվազն 6 նիշ";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert(
                `Նամակը ուղարկված է:\nԱնուն: ${name}\nEmail: ${email}\nԳաղտնաբառ: ${password}`
            );
            // TODO: իրական authentication
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-100 via-blue-100 to-purple-100 p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 overflow-hidden"
            >
                {/* Nature Background Bubbles */}
                <div className="absolute -top-12 -left-12 w-36 h-36 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

                <h1 className="text-3xl font-bold text-center text-[#5d8c73] mb-6">
                    Nature Nook
                </h1>
                <p className="text-center text-gray-500 mb-8">
                    Մուտք գործեք Ձեր հաշիվ
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Անուն */}
                    <motion.div whileFocus={{ scale: 1.02 }}>
                        <input
                            type="text"
                            placeholder="Անուն"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.name ? "border-red-500" : "border-gray-300"
                                } focus:border-green-400 focus:ring-2 focus:ring-green-200 outline-none transition`}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                    </motion.div>

                    {/* Email */}
                    <motion.div whileFocus={{ scale: 1.02 }}>
                        <input
                            type="email"
                            placeholder="Էլ․ փոստ"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.email ? "border-red-500" : "border-gray-300"
                                } focus:border-green-400 focus:ring-2 focus:ring-green-200 outline-none transition`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </motion.div>

                    {/* Password */}
                    <motion.div whileFocus={{ scale: 1.02 }}>
                        <input
                            type="password"
                            placeholder="Գաղտնաբառ"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.password ? "border-red-500" : "border-gray-300"
                                } focus:border-green-400 focus:ring-2 focus:ring-green-200 outline-none transition`}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                        )}
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-[#5d8c73] text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-green-600 transition-all"
                    >
                        Մուտք
                    </motion.button>
                </form>

                <p className="text-center text-gray-400 mt-6">
                    դեռ չունեք հաշիվ?{" "}
                    <Link to="/register" className="text-[#5d8c73] font-medium cursor-pointer hover:underline ">
                        Գրանցվել
                    </Link>
                </p>
            </motion.div>
        </div>
    );
}