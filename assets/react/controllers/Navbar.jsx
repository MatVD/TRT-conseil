import React from "react";

export default function () {
    return (
        <header className="bg-sky-800 h-35 w-full">
            <nav className="lg:container mx-auto flex justify-between items-center text-white">
                <div
                    className="group flex h-20 w-20 cursor-pointer items-center justify-center bg-sky-800">
                    <div className="space-y-2">
                            <span
                                className="block h-1 w-10 origin-center rounded-full bg-slate-500 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
                        <span
                            className="block h-1 w-8 origin-center rounded-full bg-orange-500 transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
                        <span
                            className="block h-1 w-8 origin-center rounded-full bg-white transition-transform ease-in-out group-hover:hidden"></span>
                    </div>
                </div>
                <p className="hidden text-3xl md:block">TRT Conseil</p>
                <div className="flex items-center">
                    <i className="fa-solid fa-user fa-xl"></i>
                    <p className="ml-4 mr-4">Compte</p>
                </div>
            </nav>
        </header>
    )
}