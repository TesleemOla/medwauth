"use client"
// import Link from "next/link";
import AuthButton from "./AuthButton";

import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react"
import { setCookie } from "cookies-next";

const Navbar = () => {

    const  {data} = useSession()
    if(data){
    setCookie("token", data.user.token, { httpOnly: true })
    
    }

    return (
        <div className="w-full h-20 bg-gray-800 sticky top-0">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    {/* <Logo /> Your logo component */}
                    <ul className="hidden md:flex gap-x-6 text-white">
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
                    { !data ?<AuthButton typer="signIn" />:
                    <AuthButton typer="signOut" />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;