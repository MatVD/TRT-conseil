import React from "react";

export default function () {
    return (
        <footer className="md:container mx-auto flex w-full justify-between items-center sticky bottom-0">
            <p className="text-3xl">TRT Conseil</p>
            <div className="flex">
                <ul className="flex-col mx-3">
                    <li className="list-none">
                        <a className="no-underline text-black">FAQ</a>
                    </li>
                    <li>
                        <a className="no-underline text-black">Services de conseil</a>
                    </li>
                    <li >
                        <a className="no-underline text-black">Conditions générales</a>
                    </li>
                </ul>
                <ul className="flex-col mx-3">
                    <li className="list-none">
                        <a className="no-underline text-black">Qui sommes-nous ?</a>
                    </li>
                    <li>
                        <a className="no-underline text-black">Nous rejoindre</a>
                    </li>
                    <li >
                        <a className="no-underline text-black">Confidentialité</a>
                    </li>
                </ul>
            </div>
            <button type="button" className="shadow-none p-2 border-2 rounded-2xl">Nous contacter</button>
            <div className="flex">
                <i className="fa-brands fa-twitter fa-xl"></i>
                <i className="fa-brands fa-facebook fa-xl ml-2"></i>
                <i className="fa-brands fa-linkedin fa-xl ml-2"></i>
            </div>
        </footer>
    )
}