
import AuthButton from "./AuthButton";
import React from "react";
import Link from "next/link";




const Navbar = () => {
  
    return (
        <div className="w-full h-20 bg-white sticky top-0 left-0">
            <div className="container lg:mx-auto px-4 h-full">
                <div className="flex gap-x-3 lg:justify-between items-center h-full">
                    
                    <ul className="contents">
                        <li className="text-xl font-bold text-blue-500">
                            <Link href="/">
                                PharmaCol
                            </Link>
                        </li>
                        <li>
                            <Link href="/services">
                                <p>Services</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacts">
                                <p>Contacts</p>
                            </Link>
                        </li>
                    </ul>
                    <AuthButton />
                </div>
            </div>
        </div>
    );
};

export default Navbar;