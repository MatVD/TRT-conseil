import React from "react";

export default function () {
    return (
        <header className="container mx-auto flex bg-amber-400 w-full h-35">
            <nav className="md:container flex justify-between items-center">
                <div
                    className="group flex h-20 w-20 cursor-pointer items-center justify-center bg-amber-400">
                    <div className="space-y-2">
                            <span
                                className="block h-1 w-10 origin-center rounded-full bg-slate-500 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
                        <span
                            className="block h-1 w-8 origin-center rounded-full bg-orange-500 transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
                        <span
                            className="block h-1 w-8 origin-center rounded-full bg-gray-500 transition-transform ease-in-out group-hover:hidden"></span>
                    </div>
                </div>
                <p className="text-3xl">TRT Conseil</p>
                <div className="flex items-center">
                    <i className="fa-solid fa-user fa-xl"></i>
                    <p className="ml-4">Mon compte</p>
                </div>
            </nav>
        </header>
    )
}