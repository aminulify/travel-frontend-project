import Image from "next/image";
import Link from "next/link";
import logo from "../public/hilink-logo.svg";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
    return (
        <nav className="relative z-30 py-4 md:mx-0 mx-10">
            <main className="flex justify-between items-center max-w-[1100px] mx-auto">
                <aside>
                    <Link href={'/'}>
                        <Image src={logo} className="w-24" alt="logo" />
                    </Link>
                </aside>
                <ul className="lg:flex md:flex gap-3 hidden">
                    {NAV_LINKS.map((link) => (
                        <Link href={link.href} key={link.key} className="px-2 transition-all hover:text-[16.5px] hover:font-medium duration-200">{link.label}</Link>
                    ))}
                </ul>
                <div className="lg:flex hidden">
                    <Button 
                        type="button"
                        title="Login"
                        icon="/user.svg"
                        
                    />
                </div>
                <div className="lg:hidden md:hidden flex cursor-pointer">
                    <HiOutlineMenuAlt3 className="text-2xl"/>
                </div>
            </main>
        </nav>
    );
};

export default Navbar;