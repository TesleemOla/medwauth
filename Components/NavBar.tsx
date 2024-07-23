
import AuthButton from "./AuthButton";
import React from "react";
import Link from "next/link";



const Navbar = () => {
  
    return (
        <div className="w-full h-20 border-black-1 sticky top-0">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    {/* <Logo /> Your logo component */}
                    <ul className="hidden md:flex gap-x-6">
                        <li>
                            <Link href="/about">
                                <p>About Us</p>
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