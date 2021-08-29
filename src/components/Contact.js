import React from 'react';
import {ChipIcon, PhoneIcon} from "@heroicons/react/solid";


export default function Contact(){
    return (
        <section id="contact" className="relative">
            <div className="text-center mb-1">
                <PhoneIcon className="w-10 inline-block mb-4"/>
                <h1 className="sm:text-4x1 text-3x1 font-medium title-font text-white mb-4">
                    Contacto
                </h1>
            </div>
            <div className="container px-5 py-5 mx-auto flex justify-center sm:flex-nowrap flex-wrap opacity-60">
                <div className="lg:w-1/3 items-center md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                DOMICILIO
                            </h2>
                            <p className="mt-1">
                                Culiacan, Sinaloa <br/>
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mb-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                CORREO
                            </h2>
                            <a className="select-all text-indigo-400 leading-relaxed">
                                ccmedranodlr@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="lg:w-1/2 md:w-1/2 flex lg:items-end  flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 px-5">
                    <div className="bg-gray-900 relative flex flex-wrap justify-center py-6 ml-2.5">
                        <a href="https://www.linkedin.com/in/ccmdlr-dev/" target="_blank" rel="noreferrer noopener">
                            <img src="../linkedin-icon.png" className="ml-5 inline-block mb-4"/>
                        </a>
                        <a href="https://github.com/CCMDLR98" target="_blank" rel="noreferrer noopener">
                            <img src="../github-icon.png" className="ml-5 inline-block mb-4"/>
                        </a>
                            <a target="_blank" rel="noreferrer noopener" href="mailto:ccmedranodlr@gmail.com?subject=Contacto Desde mi Website&body=Mesanje creado desde mi website">
                                <img src="../gmail-icon.png" className="ml-5 inline-block mb-4"/>
                            </a>
                    </div>
                </div>
            </div>
        </section>
    );
}