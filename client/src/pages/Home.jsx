
// import { useState } from "react";
// import "../styles/Home.css";

// const Home = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const [darkMode, setDarkMode] = useState(false);

//     useEffect(() => {
//         if (darkMode) {
//             document.body.classList.add("dark");
//         } else {
//             document.body.classList.remove("dark");
//         }
//     }, [darkMode]);

//     return (
//         <>
//             <button
//                 className="toggle-btn"
//                 onClick={() => setDarkMode(!darkMode)}
//             >
//                 {darkMode ? "☀ Light" : "🌙 Dark"}
//             </button>

//             <div className="bg-gray-50 min-h-screen">

//                 {/* ================= NAVBAR ================= */}
//                 <div className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm">

//                     <div className="navbar max-w-7xl mx-auto px-4">

//                         {/* LEFT */}
//                         <div className="navbar-start">

//                             {/* Mobile Hamburger */}
//                             <div className="dropdown">
//                                 <div
//                                     tabIndex={0}
//                                     role="button"
//                                     className="btn btn-ghost lg:hidden"
//                                     onClick={() => setMenuOpen(!menuOpen)}
//                                 >
//                                     ☰
//                                 </div>

//                                 {menuOpen && (
//                                     <ul className="menu menu-sm absolute mt-3 z-[1] p-4 shadow bg-white rounded-box w-64">
//                                         <li><a>Home</a></li>
//                                         <li><a>Courses</a></li>
//                                         <li><a>About</a></li>
//                                         <li><a>Blogs</a></li>
//                                         <li><a>Contact</a></li>
//                                         <li className="mt-3">
//                                             <button className="btn btn-primary w-full">
//                                                 Enroll Now
//                                             </button>
//                                         </li>
//                                     </ul>
//                                 )}
//                             </div>

//                             {/* LOGO */}
//                             <a className="text-xl font-bold text-primary">
//                                 NITISH ACADEMY
//                             </a>
//                         </div>

//                         {/* CENTER MENU */}
//                         <div className="navbar-center hidden lg:flex">
//                             <ul className="menu menu-horizontal px-1 text-base font-medium">
//                                 <li><a className="hover:text-primary">Home</a></li>
//                                 <li><a className="hover:text-primary">Courses</a></li>
//                                 <li><a className="hover:text-primary">About</a></li>
//                                 <li><a className="hover:text-primary">Blogs</a></li>
//                                 <li><a className="hover:text-primary">Contact</a></li>
//                             </ul>
//                         </div>

//                         {/* RIGHT */}
//                         <div className="navbar-end hidden lg:flex">
//                             <button className="btn btn-primary hover:scale-105 transition duration-300">
//                                 Enroll Now
//                             </button>
//                         </div>

//                     </div>
//                 </div>

//                 {/* ================= HERO SECTION ================= */}
//                 <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">

//                     <div>
//                         <h1 className="text-4xl md:text-5xl font-bold mb-6">
//                             Why Choose Our Classes
//                         </h1>
//                         <p className="text-gray-600 mb-6">
//                             Classes for 10th-12th, JEE, NEET, and competitive exams.
//                         </p>

//                         <div className="flex gap-4">
//                             <button className="btn btn-primary hover:scale-105 transition duration-300">
//                                 Enroll Now
//                             </button>
//                             <button className="btn btn-outline hover:scale-105 transition duration-300">
//                                 View Courses
//                             </button>
//                         </div>
//                     </div>

//                     <div className="flex justify-center">
//                         <img
//                             src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
//                             alt="students"
//                             className="w-80 md:w-96"
//                         />
//                     </div>

//                 </section>

//                 {/* ================= COURSE SECTION ================= */}
//                 <section className="bg-white py-12">
//                     <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8">

//                         <div className="badge badge-lg badge-outline p-6 text-lg font-semibold">
//                             HSC
//                         </div>

//                         <div className="badge badge-lg badge-outline p-6 text-lg font-semibold">
//                             SSC
//                         </div>

//                         <div className="badge badge-lg badge-outline p-6 text-lg font-semibold">
//                             JEE
//                         </div>

//                         <div className="badge badge-lg badge-outline p-6 text-lg font-semibold">
//                             NEET
//                         </div>

//                     </div>
//                 </section>

//                 {/* ================= FEATURES ================= */}
//                 <section className="max-w-7xl mx-auto px-4 py-20 text-center">

//                     <h2 className="text-3xl font-bold mb-12">
//                         Why Choose Our Classes
//                     </h2>

//                     <div className="grid md:grid-cols-4 gap-8">

//                         <div className="card bg-white shadow-md p-6 hover:shadow-xl transition">
//                             <h3 className="font-semibold text-lg mb-2">
//                                 Experienced Teachers
//                             </h3>
//                             <p className="text-gray-500">
//                                 Qualified & dedicated faculty.
//                             </p>
//                         </div>

//                         <div className="card bg-white shadow-md p-6 hover:shadow-xl transition">
//                             <h3 className="font-semibold text-lg mb-2">
//                                 Small Batch Size
//                             </h3>
//                             <p className="text-gray-500">
//                                 Personalized attention.
//                             </p>
//                         </div>

//                         <div className="card bg-white shadow-md p-6 hover:shadow-xl transition">
//                             <h3 className="font-semibold text-lg mb-2">
//                                 Weekly Tests
//                             </h3>
//                             <p className="text-gray-500">
//                                 Regular assessments.
//                             </p>
//                         </div>

//                         <div className="card bg-white shadow-md p-6 hover:shadow-xl transition">
//                             <h3 className="font-semibold text-lg mb-2">
//                                 High Success Rate
//                             </h3>
//                             <p className="text-gray-500">
//                                 Proven track record.
//                             </p>
//                         </div>

//                     </div>

//                 </section>

//                 {/* ================= FOOTER ================= */}
//                 <footer className="bg-primary text-white py-8 text-center">
//                     <h2 className="text-xl font-bold mb-2">
//                         NITISH ACADEMY
//                     </h2>
//                     <p>
//                         © 2028 Nitish Academy - All rights reserved.
//                     </p>
//                 </footer>

//             </div>
//         </>
//     );
// };

// export default Home;


// import { useState, useEffect } from "react";

// const Home = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [darkMode, setDarkMode] = useState(false);

//     // Load saved theme on first render
//     useEffect(() => {
//         const savedTheme = localStorage.getItem("theme") || "light";
//         document.documentElement.setAttribute("data-theme", savedTheme);
//         setDarkMode(savedTheme === "dark");
//     }, []);

//     // Update theme when toggled
//     useEffect(() => {
//         const theme = darkMode ? "dark" : "light";
//         document.documentElement.setAttribute("data-theme", theme);
//         localStorage.setItem("theme", theme);
//     }, [darkMode]);

//     return (
//         <div className="min-h-screen bg-base-100 transition-all duration-300">

//             {/* Dark Mode Toggle */}
//             <button
//                 className="fixed top-5 right-5 z-50 btn btn-sm btn-outline"
//                 onClick={() => setDarkMode(!darkMode)}
//             >
//                 {darkMode ? "☀ Light" : "🌙 Dark"}
//             </button>

//             {/* ================= NAVBAR ================= */}
//             <div className="sticky top-0 z-40 backdrop-blur-md bg-base-100/80 shadow-sm">

//                 <div className="navbar max-w-7xl mx-auto px-4">

//                     {/* LEFT */}
//                     <div className="navbar-start">

//                         <div className="dropdown">
//                             <div
//                                 tabIndex={0}
//                                 role="button"
//                                 className="btn btn-ghost lg:hidden"
//                                 onClick={() => setMenuOpen(!menuOpen)}
//                             >
//                                 ☰
//                             </div>

//                             {menuOpen && (
//                                 <ul className="menu menu-sm absolute mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-64">
//                                     <li><a>Home</a></li>
//                                     <li><a>Courses</a></li>
//                                     <li><a>About</a></li>
//                                     <li><a>Blogs</a></li>
//                                     <li><a>Contact</a></li>
//                                     <li className="mt-3">
//                                         <button className="btn btn-primary w-full">
//                                             Enroll Now
//                                         </button>
//                                     </li>
//                                 </ul>
//                             )}
//                         </div>

//                         <a className="text-xl font-bold text-primary">
//                             NITISH ACADEMY
//                         </a>
//                     </div>

//                     {/* CENTER */}
//                     <div className="navbar-center hidden lg:flex">
//                         <ul className="menu menu-horizontal px-1 text-base font-medium">
//                             <li><a>Home</a></li>
//                             <li><a>Courses</a></li>
//                             <li><a>About</a></li>
//                             <li><a>Blogs</a></li>
//                             <li><a>Contact</a></li>
//                         </ul>
//                     </div>

//                     {/* RIGHT */}
//                     <div className="navbar-end hidden lg:flex">
//                         <button className="btn btn-primary hover:scale-105 transition duration-300">
//                             Enroll Now
//                         </button>
//                     </div>

//                 </div>
//             </div>

//             {/* ================= HERO ================= */}
//             <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">

//                 <div>
//                     <h1 className="text-4xl md:text-5xl font-bold mb-6">
//                         Why Choose Our Classes
//                     </h1>

//                     <p className="opacity-70 mb-6">
//                         Classes for 10th-12th, JEE, NEET, and competitive exams.
//                     </p>

//                     <div className="flex gap-4">
//                         <button className="btn btn-primary hover:scale-105 transition duration-300">
//                             Enroll Now
//                         </button>
//                         <button className="btn btn-outline hover:scale-105 transition duration-300">
//                             View Courses
//                         </button>
//                     </div>
//                 </div>

//                 <div className="flex justify-center">
//                     <img
//                         src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
//                         alt="students"
//                         className="w-80 md:w-96"
//                     />
//                 </div>

//             </section>

//             {/* ================= COURSE SECTION ================= */}
//             <section className="bg-base-200 py-12">
//                 <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8">

//                     <div className="badge badge-lg badge-outline p-6 text-lg font-semibold">
//                         HSC
//                     </div>

//                     <div className="badge badge-lg badge-outline p-6 text-lg font-semibold">
//                         SSC
//                     </div>

//                     <div className="badge badge-lg badge-outline p-6 text-lg font-semibold">
//                         JEE
//                     </div>

//                     <div className="badge badge-lg badge-outline p-6 text-lg font-semibold">
//                         NEET
//                     </div>

//                 </div>
//             </section>

//             {/* ================= FEATURES ================= */}
//             <section className="max-w-7xl mx-auto px-4 py-20 text-center">

//                 <h2 className="text-3xl font-bold mb-12">
//                     Why Choose Our Classes
//                 </h2>

//                 <div className="grid md:grid-cols-4 gap-8">

//                     <div className="card bg-base-100 shadow-md p-6 hover:shadow-xl transition">
//                         <h3 className="font-semibold text-lg mb-2">
//                             Experienced Teachers
//                         </h3>
//                         <p className="opacity-70">
//                             Qualified & dedicated faculty.
//                         </p>
//                     </div>

//                     <div className="card bg-base-100 shadow-md p-6 hover:shadow-xl transition">
//                         <h3 className="font-semibold text-lg mb-2">
//                             Small Batch Size
//                         </h3>
//                         <p className="opacity-70">
//                             Personalized attention.
//                         </p>
//                     </div>

//                     <div className="card bg-base-100 shadow-md p-6 hover:shadow-xl transition">
//                         <h3 className="font-semibold text-lg mb-2">
//                             Weekly Tests
//                         </h3>
//                         <p className="opacity-70">
//                             Regular assessments.
//                         </p>
//                     </div>

//                     <div className="card bg-base-100 shadow-md p-6 hover:shadow-xl transition">
//                         <h3 className="font-semibold text-lg mb-2">
//                             High Success Rate
//                         </h3>
//                         <p className="opacity-70">
//                             Proven track record.
//                         </p>
//                     </div>

//                 </div>

//             </section>

//             {/* ================= FOOTER ================= */}
//             <footer className="bg-base-200 text-base-content">

//                 <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

//                     {/* BRAND SECTION */}
//                     <div>
//                         <h2 className="text-2xl font-bold text-primary mb-4">
//                             NITISH ACADEMY
//                         </h2>
//                         <p className="opacity-70 mb-4">
//                             Empowering students from 10th to competitive exams with
//                             expert guidance and proven results.
//                         </p>

//                         <div className="flex gap-3 mt-4">
//                             <a className="btn btn-circle btn-outline btn-sm">
//                                 🌐
//                             </a>
//                             <a className="btn btn-circle btn-outline btn-sm">
//                                 📘
//                             </a>
//                             <a className="btn btn-circle btn-outline btn-sm">
//                                 📷
//                             </a>
//                         </div>
//                     </div>

//                     {/* NAVIGATION */}
//                     <div>
//                         <h3 className="footer-title">Navigation</h3>
//                         <ul className="space-y-2">
//                             <li><a className="link link-hover">Home</a></li>
//                             <li><a className="link link-hover">Courses</a></li>
//                             <li><a className="link link-hover">About Us</a></li>
//                             <li><a className="link link-hover">Blogs</a></li>
//                             <li><a className="link link-hover">Contact</a></li>
//                         </ul>
//                     </div>

//                     {/* COURSES */}
//                     <div>
//                         <h3 className="footer-title">Courses</h3>
//                         <ul className="space-y-2">
//                             <li><a className="link link-hover">HSC</a></li>
//                             <li><a className="link link-hover">SSC</a></li>
//                             <li><a className="link link-hover">JEE</a></li>
//                             <li><a className="link link-hover">NEET</a></li>
//                         </ul>
//                     </div>

//                     {/* CONTACT */}
//                     <div>
//                         <h3 className="footer-title">Contact Us</h3>
//                         <p className="opacity-70 mb-2">
//                             📍 Mumbai, Maharashtra
//                         </p>
//                         <p className="opacity-70 mb-2">
//                             📞 +91 98765 43210
//                         </p>
//                         <p className="opacity-70">
//                             ✉ nitishacademy@gmail.com
//                         </p>
//                     </div>

//                 </div>

//                 {/* BOTTOM BAR */}
//                 <div className="border-t border-base-300">

//                     <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

//                         <p className="text-sm opacity-70 text-center md:text-left">
//                             © {new Date().getFullYear()} Nitish Academy. All rights reserved.
//                         </p>



//                     </div>

//                 </div>

//             </footer>

//         </div>
//     );
// };

// export default Home;


import { useState, useEffect } from "react";
import AuthModal from "../components/AuthModal";

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [showAuth, setShowAuth] = useState(false);
    // Load theme
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.documentElement.setAttribute("data-theme", savedTheme);
        setDarkMode(savedTheme === "dark");
    }, []);

    // Update theme
    useEffect(() => {
        const theme = darkMode ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [darkMode]);

    return (
        <div className="min-h-screen bg-base-100 transition-all duration-300">

            {/* 🌙 Dark Mode Toggle */}
            <button
                className="fixed top-5 right-5 z-50 btn btn-sm btn-outline"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? "☀ Light" : "🌙 Dark"}
            </button>

            {/* ================= NAVBAR ================= */}
            <div className="sticky top-0 z-40 backdrop-blur-md bg-base-100/80 shadow-sm">
                <div className="navbar max-w-7xl mx-auto px-4">

                    {/* LEFT */}
                    <div className="navbar-start">
                        <button
                            className="btn btn-ghost lg:hidden"
                            onClick={() => setMenuOpen(true)}
                        >
                            ☰
                        </button>

                        <a className="text-xl font-bold text-primary">
                            NITISH ACADEMY
                        </a>
                    </div>

                    {/* CENTER */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-base font-medium">
                            <li><a>Home</a></li>
                            <li><a>Courses</a></li>
                            <li><a>About</a></li>
                            <li><a>Blogs</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>

                    {/* RIGHT */}
                    <div className="navbar-end hidden lg:flex">
                        {/* <button className="btn btn-primary">
                            Enroll Now
                        </button> */}
                        <button
                            className="btn btn-primary"
                            onClick={() => setShowAuth(true)}>
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>

            {/* ================= MOBILE SIDEBAR ================= */}
            <div
                className={`fixed inset-0 z-50 transition-all duration-300 ${menuOpen ? "visible" : "invisible"
                    }`}
            >
                {/* Blur Background */}
                <div
                    className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"
                        }`}
                    onClick={() => setMenuOpen(false)}
                ></div>

                {/* Sidebar */}
                <div
                    className={`absolute top-0 left-0 h-full w-72 bg-base-100 shadow-xl transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <div className="p-6">

                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-primary">
                                NITISH ACADEMY
                            </h2>
                            <button
                                className="btn btn-sm btn-circle"
                                onClick={() => setMenuOpen(false)}
                            >
                                ✕
                            </button>
                        </div>

                        <ul className="space-y-4 text-lg">
                            <li><a className="link link-hover">Home</a></li>
                            <li><a className="link link-hover">Courses</a></li>
                            <li><a className="link link-hover">About</a></li>
                            <li><a className="link link-hover">Blogs</a></li>
                            <li><a className="link link-hover">Contact</a></li>
                        </ul>

                        <button className="btn btn-primary w-full mt-8" onClick={() => setShowAuth(true)}>
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>

            {/* ================= HERO ================= */}
            <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">

                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Why Choose Our Classes
                    </h1>

                    <p className="opacity-70 mb-6">
                        Classes for 10th-12th, JEE, NEET, and competitive exams.
                    </p>

                    <div className="flex gap-4">
                        <button className="btn btn-primary" onClick={() => setShowAuth(true)}>
                            Enroll Now
                        </button>
                        <button className="btn btn-outline">
                            View Courses
                        </button>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
                        alt="students"
                        className="w-80 md:w-96"
                    />
                </div>

            </section>

            {/* ================= COURSE SECTION ================= */}
            <section className="bg-base-200 py-12">
                <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8">

                    <div className="badge badge-lg badge-outline p-6 text-lg font-semibold">
                        HSC
                    </div>
                    <div className="badge badge-lg badge-outline p-6 text-lg font-semibold">
                        SSC
                    </div>
                    <div className="badge badge-lg badge-outline p-6 text-lg font-semibold">
                        JEE
                    </div>
                    <div className="badge badge-lg badge-outline p-6 text-lg font-semibold">
                        NEET
                    </div>

                </div>
            </section>

            {/* ================= FEATURES ================= */}
            <section className="max-w-7xl mx-auto px-4 py-20 text-center">

                <h2 className="text-3xl font-bold mb-12">
                    Why Choose Our Classes
                </h2>

                <div className="grid md:grid-cols-4 gap-8">

                    <div className="card bg-base-100 shadow-md p-6">
                        <h3 className="font-semibold text-lg mb-2">
                            Experienced Teachers
                        </h3>
                        <p className="opacity-70">
                            Qualified & dedicated faculty.
                        </p>
                    </div>

                    <div className="card bg-base-100 shadow-md p-6">
                        <h3 className="font-semibold text-lg mb-2">
                            Small Batch Size
                        </h3>
                        <p className="opacity-70">
                            Personalized attention.
                        </p>
                    </div>

                    <div className="card bg-base-100 shadow-md p-6">
                        <h3 className="font-semibold text-lg mb-2">
                            Weekly Tests
                        </h3>
                        <p className="opacity-70">
                            Regular assessments.
                        </p>
                    </div>

                    <div className="card bg-base-100 shadow-md p-6">
                        <h3 className="font-semibold text-lg mb-2">
                            High Success Rate
                        </h3>
                        <p className="opacity-70">
                            Proven track record.
                        </p>
                    </div>

                </div>
            </section>

            {/* ================= FOOTER ================= */}
            <footer className="bg-base-200 text-base-content">
                <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

                    <div>
                        <h2 className="text-2xl font-bold text-primary mb-4">
                            NITISH ACADEMY
                        </h2>
                        <p className="opacity-70 mb-4">
                            Empowering students with expert guidance and proven results.
                        </p>
                    </div>

                    <div>
                        <h3 className="footer-title">Navigation</h3>
                        <ul className="space-y-2">
                            <li><a className="link link-hover">Home</a></li>
                            <li><a className="link link-hover">Courses</a></li>
                            <li><a className="link link-hover">About</a></li>
                            <li><a className="link link-hover">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer-title">Courses</h3>
                        <ul className="space-y-2">
                            <li><a className="link link-hover">HSC</a></li>
                            <li><a className="link link-hover">SSC</a></li>
                            <li><a className="link link-hover">JEE</a></li>
                            <li><a className="link link-hover">NEET</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer-title">Contact</h3>
                        <p className="opacity-70">📍 Mumbai</p>
                        <p className="opacity-70">📞 +91 9876543210</p>
                        <p className="opacity-70">✉ nitishacademy@gmail.com</p>
                    </div>

                </div>

                <div className="border-t border-base-300">
                    <div className="max-w-7xl mx-auto px-6 py-6 text-center opacity-70 text-sm">
                        © {new Date().getFullYear()} Nitish Academy. All rights reserved.
                    </div>
                </div>
            </footer>
            <AuthModal
                isOpen={showAuth}
                onClose={() => setShowAuth(false)}
            />

        </div>

    );
};

export default Home;