import React from "react";
export default function About(){
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16
                md:mb-0 items-center text-center">
                    <h1 className="font-black sm:text-4x1 text-4xl mb-0.5 text-yellow-450 uppercase">
                        Carlos César
                    </h1>
                    <h1 className="font-black sm:text-4x1 text-6x1 mb-4 text-yellow-450 uppercase">
                        Medrano de la Rocha
                    </h1>
                    <p className="mb-8 leading-relaxed text-center xl:ml-32 xl:mr-28 uppercase font-semibold">
                        Hola!, soy Ingeniero en Sistemas
                        Computacionales, Desarrollando sus
                        habilidades en el desarrollo web, desde
                        Culiacán, Sinaloa.
                    </p>
                    <div className="flex justify-center">
                        <a href="#contact" className="inline-flex items-center text-white bg-yellow-450 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-450 hover:opacity-75 rounded text-lg">
                            Contacto
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Proyectos Realizados
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./coding.svg"
                    />
                </div>
            </div>
        </section>
    );
}