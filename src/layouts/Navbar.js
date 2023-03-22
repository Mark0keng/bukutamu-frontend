import React from 'react'
import '../css/output.css';

const Navbar = () => {
    return ( 
        <React.Fragment>
            <header className="bg-transparent absolute top-0 left-0 w-full flex justify-center z-10 shadow">
                <div className="container w-4/5">
                    <div className="flex items-center justify-between relative">
                        <div className="px-4">
                            <a href="#hero" className="font-bold text-lg text-slate-700 block py-6">Buku Tamu</a>
                        </div>

                        <div className="flex items-center px-4">
                            <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden">
                                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                                <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
                            </button>

                            <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-5 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none">
                                <ul className="block lg:flex">
                                    <li className="group">
                                        <a href="#hero" className="text-base font-semibold py-3 mx-8 text-slate-600 flex group-hover:text-primary">Beranda</a>
                                    </li>
                                    <li className="group">
                                        <a href="#about" className="text-base font-semibold py-3 mx-8 text-slate-600 flex group-hover:text-primary">Buku Tamu</a>
                                    </li>
                                    <li className="group">
                                        <a href="#portfolio" className="bg-sky-500 text-white text-base font-semibold py-2 px-5 mx-8 rounded-full flex group-hover:text-primary">Login</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Navbar