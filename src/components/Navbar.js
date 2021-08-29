import React from 'react';
import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Navbar(){
    return (
        <header className="bg-gray-800 bg-opacity-90 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0 flex flex-col">
                    <a href="#about" className="mx-12 text-xl text-yellow-450">
                        CCMDLR
                    </a>
                    <a href="#about" className="ml-3 font-bold text-xl text-yellow-450">
                        WEBDEVELOPER
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:my-1 md:pl-4 md:border-1 md:border-gray-700
                flex flex-wrap items-center text-base justify-center font-mono text-2xl">
                    <a href="#projects" className="mx-3.5 hover:text-white">
                        Proyectos
                    </a>
                    <a href="#skills" className="mx-2 hover:text-white">
                        Habilidades
                    </a>
                </nav>
                <a
                    href="#contact"
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700
                     rounded text-base font-mono mt-4 md:mt-0 text-2xl">
                    Contacto
                </a>
            </div>
        </header>
    );
}