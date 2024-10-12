import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
         <div className="container mx-auto flex justify-between items-center">
            <div className="text-xl text-white font-bold">Severanto</div>
            <ul className="flex space-x-4">
                <li>
                    <a href="#home" className="hover:text-gray-300">Home</a>
                </li>
            </ul>
         </div>
         </nav>
    );
}

export default Navbar;