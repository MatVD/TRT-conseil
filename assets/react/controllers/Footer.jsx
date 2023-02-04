import React from "react";

export default function () {
    return (
        <footer
            className="bg-sky-800 w-full text-white">
            <div className="lg:container mx-auto flex w-full justify-between items-center h-40">
                <p className="hidden text-3xl md:block ml-4">TRT Conseil</p>
                <div className="flex">
                    <ul className="flex-col mx-5">
                        <li className="list-none">
                            <a href="#" className="text-white no-underline text-black">FAQ</a>
                        </li>
                        <li>
                            <a href="#" className="text-white no-underline text-black">Services de conseil</a>
                        </li>
                        <li>
                            <a href="#" className="text-white no-underline text-black">Conditions générales</a>
                        </li>
                    </ul>
                    <ul className="flex-col mx-3">
                        <li className="list-none">
                            <a href="#" className="text-white no-underline text-black">Qui sommes-nous ?</a>
                        </li>
                        <li>
                            <a href="#" className="text-white no-underline text-black">Nous rejoindre</a>
                        </li>
                        <li>
                            <a href="#" className="text-white no-underline text-black">Confidentialité</a>
                        </li>
                    </ul>
                </div>
                <button type="button" className="hidden shadow-none p-2 border-2 rounded-2xl md:block">Nous contacter</button>
                <div className="flex mr-4">
                    <i className="fa-brands fa-twitter fa-2xl"></i>
                    <i className="fa-brands fa-facebook fa-2xl ml-2"></i>
                    <i className="fa-brands fa-linkedin fa-2xl ml-2"></i>
                </div>
            </div>

        </footer>
    )
}