import React from "react";
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 w-full bg-black h-12 text-white text-center">
            <button className="transition duration-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link href={'/'}>
                    Home
                </Link>
            </button>            
            <button className="transition duration-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link href={'/users'}>
                    Users
                </Link>
            </button>
            <button className="transition duration-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link href={'/profile'}>
                    Profile
                </Link>
            </button>
        </div>
    );
};

export default Navbar;  