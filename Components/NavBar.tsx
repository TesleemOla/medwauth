
import AuthButton from "./AuthButton";
import React from "react";
import Link from "next/link";




const Navbar = () => {
  
    return (
        <div className="w-full h-20 bg-white fixed top-0">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    
                    <ul className="flex gap-x-6">
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
                    {/* <Button /> Your button component */}
                    <AuthButton />
                </div>
            </div>
        </div>
    );
};

export default Navbar;