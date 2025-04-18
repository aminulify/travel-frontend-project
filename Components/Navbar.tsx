'use client';

import Image from "next/image";
import Link from "next/link";
import logo from "../public/hilink-logo.svg";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import React, { useState } from "react";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    return (
        <nav className="relative z-30 py-4 md:mx-0">
            <main className="flex justify-between items-center max-w-[1100px] md:mx-auto mx-10">
                <aside>
                    <Link href={'/'}>
                        <Image src={logo} className="w-22" alt="logo" />
                    </Link>
                </aside>
                <ul className="lg:flex md:flex gap-3 hidden">
                    {NAV_LINKS.map((link) => (
                        <Link href={link.href} key={link.key} className="px-2 transition-all hover:underline hover:text-green-600 duration-200">{link.label}</Link>
                    ))}
                </ul>
                <div className="lg:flex hidden">
                    <Button 
                        type="button"
                        title="Login"
                        icon="/user.svg"
                        variant="btn-black"
                    />
                </div>
                <div className={`lg:hidden md:hidden flex cursor-pointer z-10 ${isOpen && 'fixed top-5 right-8'}`}>
                    {
                        isOpen ? <IoCloseOutline onClick={()=>setIsOpen(false)} onMouseDown={()=>setIsOpen(false)} className="text-2xl"/> : <HiOutlineMenuAlt3 onClick={()=>setIsOpen(true)} onMouseDown={()=>{setIsOpen(false)}} className="text-2xl"/>
                    }
                </div>
                
            </main>

            <div>
                {
                    isOpen && (
                        <div><ul className="lg:hidden md:hidden gap-3 flex flex-col w-full backdrop-blur-3xl bg-[#ffffff54] fixed px-8 py-10 top-0">
                        {NAV_LINKS.map((link) => (
                        <Link href={link.href} key={link.key} onClick={()=>setIsOpen(false)} className="px-2 transition-all hover:text-[16.5px] hover:font-medium duration-200">{link.label}</Link>
                    ))}
                </ul></div>
                    )
                }
                </div>
        </nav>
    );
};

export default Navbar;